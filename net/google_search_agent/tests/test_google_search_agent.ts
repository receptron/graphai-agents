import { graphDataTestRunner } from "@receptron/test_utils";
import googleSearchAgentInfo from "../src/google_search_agent";
import { copyAgent } from "@graphai/vanilla";

import { graphDataSearch, graphDataNoAPIKey, graphDataNoCX, graphDataErrorResponse, graphDataApiKeyFromEnv } from "./graphData";

import test from "node:test";
import assert from "node:assert";
import { setGlobalDispatcher, getGlobalDispatcher } from "undici";

// Mock response data
const mockSearchResults = {
  web: {
    results: [
      {
        title: "GraphAI: A Modern AI Framework",
        link: "https://example.com/graphai",
        snippet: "GraphAI is a modern framework for building AI applications.",
      },
      {
        title: "Getting Started with GraphAI",
        link: "https://example.com/graphai/docs",
        snippet: "Learn how to get started with GraphAI.",
      },
    ],
  },
};

// Save the original global dispatcher
const originalDispatcher = getGlobalDispatcher();

const cleanupEnvironment = () => {
  delete process.env.GOOGLE_SEARCH_API_KEY;
  setGlobalDispatcher(originalDispatcher);
};

test("test google search", async () => {
  try {
    const result = await graphDataTestRunner<{
      items: Array<{
        title: string;
        link: string;
        snippet: string;
      }>;
    }>(__dirname, __filename, graphDataSearch, { googleSearchAgent: googleSearchAgentInfo, copyAgent }, () => {}, false);

    const resultData = result.success?.items;
    console.log(resultData);
    assert.ok(resultData, "Expected results array");
    assert.equal(resultData.length, 2, "Expected 2 search results");
    assert.equal(resultData[0].title, mockSearchResults.web.results[0].title, "Expected matching title");
    assert.equal(resultData[0].link, mockSearchResults.web.results[0].link, "Expected matching URL");
  } finally {
    cleanupEnvironment();
  }
});

test("test google search without API KEY", async () => {
  try {
    await graphDataTestRunner(__dirname, __filename, graphDataNoAPIKey, { googleSearchAgent: googleSearchAgentInfo, copyAgent }, () => {}, false);
    assert.fail("Expected error to be thrown");
  } catch (error) {
    if (error instanceof Error) {
      assert.ok(error.message.includes("Google Search API key is required."), "Expected error message about missing API token");
    } else {
      // Fail the test for unexpected errors
      assert.fail(`Unexpected error: ${error}`);
    }
  } finally {
    setGlobalDispatcher(originalDispatcher);
  }
});

test("test google search without CX", async () => {
  try {
    await graphDataTestRunner(__dirname, __filename, graphDataNoCX, { googleSearchAgent: googleSearchAgentInfo, copyAgent }, () => {}, false);
    assert.fail("Expected error to be thrown");
  } catch (error) {
    if (error instanceof Error) {
      assert.ok(error.message.includes("Google Search API cx is required."), "Expected error message about missing API token");
    } else {
      // Fail the test for unexpected errors
      assert.fail(`Unexpected error: ${error}`);
    }
  } finally {
    setGlobalDispatcher(originalDispatcher);
  }
});

test("test google search error response", async () => {
  try {
    const result = await graphDataTestRunner<{
      result: {
        onError: {
          message: string;
          status?: number;
          error: string;
        };
      };
    }>(__dirname, __filename, graphDataErrorResponse, { googleSearchAgent: googleSearchAgentInfo, copyAgent }, () => {}, false);

    const resultData = result.error?.result.onError;
    assert.ok(resultData?.message.includes("API key not valid. Please pass a valid API key."), "Expected error message about missing API token");
  } finally {
    cleanupEnvironment();
  }
});

test("test google search api key from env", async () => {
  process.env.GOOGLE_SEARCH_API_KEY = "test_token";

  try {
    const result = await graphDataTestRunner<{
      result: {
        onError: {
          message: string;
          status?: number;
          error: string;
        };
      };
    }>(__dirname, __filename, graphDataApiKeyFromEnv, { googleSearchAgent: googleSearchAgentInfo, copyAgent }, () => {}, false);

    const resultData = result.error?.result.onError;
    assert.ok(resultData?.message.includes("API key not valid. Please pass a valid API key."), "Expected error message about missing API token");
  } finally {
    cleanupEnvironment();
  }
});
