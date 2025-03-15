import { graphDataTestRunner } from "@receptron/test_utils";
import braveSearchAgentInfo from "../src/brave_search_agent";
import { copyAgent } from "@graphai/vanilla";

import { graphDataSearch, graphDataNoToken, graphDataErrorResponse, graphDataApiKeyFromEnv } from "./graphData";

import test from "node:test";
import assert from "node:assert";
import { MockAgent, setGlobalDispatcher, getGlobalDispatcher } from "undici";

// Mock response data
const mockSearchResults = {
  web: {
    results: [
      {
        title: "GraphAI: A Modern AI Framework",
        url: "https://example.com/graphai",
        description: "GraphAI is a modern framework for building AI applications.",
      },
      {
        title: "Getting Started with GraphAI",
        url: "https://example.com/graphai/docs",
        description: "Learn how to get started with GraphAI.",
      },
    ],
  },
};

// Save the original global dispatcher
const originalDispatcher = getGlobalDispatcher();

const mockAgent = new MockAgent();
mockAgent.disableNetConnect();

const setupEnvironment = () => {
  process.env.BRAVE_SEARCH_API_TOKEN = "test_token";

  setGlobalDispatcher(mockAgent);

  const mockPool = mockAgent.get("https://api.search.brave.com");

  // Mock the search endpoint for regular search queries
  mockPool
    .intercept({
      path: (path) => path.startsWith("/res/v1/web/search") && path.includes("q=graphai"),
      method: "GET",
      headers: {
        "x-subscription-token": "test_token",
        accept: "application/json",
      },
    })
    .reply(200, mockSearchResults, {
      headers: { "content-type": "application/json" },
    });

  // Mock error responses
  mockPool
    .intercept({
      path: (path) => path.startsWith("/res/v1/web/search") && path.includes("q=error"),
      method: "GET",
      headers: {
        "x-subscription-token": "test_token",
        accept: "application/json",
      },
    })
    .reply(429, "Too many requests");
};

const cleanupEnvironment = () => {
  delete process.env.BRAVE_SEARCH_API_TOKEN;
  setGlobalDispatcher(originalDispatcher);
};

test("test brave search", async () => {
  setupEnvironment();
  try {
    const result = await graphDataTestRunner<{
      items: Array<{
        title: string;
        link: string;
        snippet: string;
      }>;
    }>(__dirname, __filename, graphDataSearch, { braveSearchAgent: braveSearchAgentInfo, copyAgent }, () => {}, false);

    const resultData = result.success?.items;
    console.log(resultData);
    assert.ok(resultData, "Expected results array");
    assert.equal(resultData.length, 2, "Expected 2 search results");
    assert.equal(resultData[0].title, mockSearchResults.web.results[0].title, "Expected matching title");
    assert.equal(resultData[0].link, mockSearchResults.web.results[0].url, "Expected matching URL");
  } finally {
    cleanupEnvironment();
  }
});

test("test brave search without token", async () => {
  setupEnvironment();
  delete process.env.BRAVE_SEARCH_API_TOKEN;

  try {
    await graphDataTestRunner(__dirname, __filename, graphDataNoToken, { braveSearchAgent: braveSearchAgentInfo, copyAgent }, () => {}, false);
    assert.fail("Expected error to be thrown");
  } catch (error) {
    if (error instanceof Error) {
      assert.ok(error.message.includes("API token is required"), "Expected error message about missing API token");
    } else {
      // Fail the test for unexpected errors
      assert.fail(`Unexpected error: ${error}`);
    }
  } finally {
    setGlobalDispatcher(originalDispatcher);
  }
});

test("test brave search error response", async () => {
  setupEnvironment();

  try {
    const result = await graphDataTestRunner<{
      result: {
        onError: {
          message: string;
          status?: number;
          error: string;
        };
      };
    }>(__dirname, __filename, graphDataErrorResponse, { braveSearchAgent: braveSearchAgentInfo, copyAgent }, () => {}, false);

    const resultData = result.error?.result.onError;
    assert.ok(resultData, "Expected error result");
  } finally {
    cleanupEnvironment();
  }
});

test.only("test brave search api key from env", async () => {
  setupEnvironment();
  try {
    const result = await graphDataTestRunner<{
      items: Array<{
        title: string;
        link: string;
        snippet: string;
      }>;
    }>(__dirname, __filename, graphDataApiKeyFromEnv, { braveSearchAgent: braveSearchAgentInfo, copyAgent }, () => {}, false);

    const resultData = result.success?.items;
    console.log(resultData);
  } finally {
    cleanupEnvironment();
  }
});
