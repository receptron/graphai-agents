import { graphDataTestRunner } from "@receptron/test_utils";
import browserlessAgentInfo from "../src/browserless_agent";
import { copyAgent } from "@graphai/vanilla";

import { graphDataContent, graphDataNoToken, graphDataErrorResponse, graphDataTextContent, graphDataApiKeyFromEnv } from "./graphData";

import test from "node:test";
import assert from "node:assert";
import { MockAgent, setGlobalDispatcher, getGlobalDispatcher } from "undici";

// Mock response data
const mockContentHtml = "<html><body>This is test content</body></html>";
const mockBody = {
  data: [
    {
      results: [{ text: "This is test content" }],
    },
  ],
};

// Save the original global dispatcher
const originalDispatcher = getGlobalDispatcher();

const mockAgent = new MockAgent();
mockAgent.disableNetConnect();

const setupEnvironment = () => {
  process.env.BROWSERLESS_API_TOKEN = "test_token";

  setGlobalDispatcher(mockAgent);

  const mockPool = mockAgent.get("https://chrome.browserless.io");

  // Mock the content endpoint for regular URL requests
  mockPool
    .intercept({
      path: "/content?token=test_token",
      method: "POST",
      body: (body) => {
        try {
          const parsedBody = JSON.parse(body.toString());
          return parsedBody.url === "https://example.com";
        } catch (__e) {
          return false;
        }
      },
    })
    .reply(200, mockContentHtml, {
      headers: { "content-type": "text/html" },
    });

  // Mock the endpoint for text responses
  mockPool
    .intercept({
      path: "/scrape?token=test_token",
      method: "POST",
      body: (body) => {
        try {
          const parsedBody = JSON.parse(body.toString());
          return parsedBody.elements && parsedBody.elements[0] && parsedBody.elements[0].selector === "body";
        } catch (__e) {
          return false;
        }
      },
    })
    .reply(200, mockBody, {
      headers: { "content-type": "text/plain" },
    });

  // Mock error responses
  mockPool
    .intercept({
      path: "/content?token=test_token",
      method: "POST",
      body: (body) => {
        try {
          const parsedBody = JSON.parse(body.toString());
          return parsedBody.url === "https://error.example.com";
        } catch (__e) {
          return false;
        }
      },
    })
    .reply(429, "Too many requests");
};

const cleanupEnvironment = () => {
  delete process.env.BROWSERLESS_API_TOKEN;
  setGlobalDispatcher(originalDispatcher);
};

test("test browserless content", async () => {
  setupEnvironment();
  try {
    const result = await graphDataTestRunner<{
      result: string;
    }>(__dirname, __filename, graphDataContent, { browserlessAgent: browserlessAgentInfo, copyAgent } as any, () => {}, false);

    const resultData = result.success?.result;
    assert.equal(resultData, mockContentHtml, "Expected success result");
  } finally {
    cleanupEnvironment();
  }
});

test("test browserless text content", async () => {
  setupEnvironment();
  try {
    const result = await graphDataTestRunner<{
      result: string;
    }>(__dirname, __filename, graphDataTextContent, { browserlessAgent: browserlessAgentInfo, copyAgent } as any, () => {}, false);

    const resultData = result.success?.result;
    assert.equal(resultData, mockBody.data[0].results[0].text, "Expected success result");
  } finally {
    cleanupEnvironment();
  }
});

test("test browserless without token", async () => {
  setupEnvironment();
  delete process.env.BROWSERLESS_API_TOKEN;

  try {
    await graphDataTestRunner(__dirname, __filename, graphDataNoToken, { browserlessAgent: browserlessAgentInfo, copyAgent } as any, () => {}, false);
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

test("test browserless error response", async () => {
  setupEnvironment();

  try {
    const result = await graphDataTestRunner<{
      result: {
        onError: {
          message: string;
          status?: number;
          error: any;
        };
      };
    }>(__dirname, __filename, graphDataErrorResponse, { browserlessAgent: browserlessAgentInfo, copyAgent } as any, () => {}, false);

    const resultData = result.error?.result;
    assert.ok(resultData?.onError, "Expected error result");
  } finally {
    cleanupEnvironment();
  }
});

test("test browserless api key from env", async () => {
  setupEnvironment();
  try {
    const result = await graphDataTestRunner<{
      result: string;
    }>(__dirname, __filename, graphDataApiKeyFromEnv, { browserlessAgent: browserlessAgentInfo, copyAgent } as any, () => {}, false);

    const resultData = result?.success?.result;
    assert.equal(resultData, mockContentHtml, "Expected success result");
  } finally {
    cleanupEnvironment();
  }
});
