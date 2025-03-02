import { AgentFunction, AgentFunctionInfo, DefaultConfigData } from "graphai";

interface BrowserlessInputs {
  url: string;
  text_content?: boolean;
}

interface BrowserlessParams {
  apiKey?: string;
  debug?: boolean;
  throwError?: boolean;
}

type BrowserlessResult =
  | string
  | {
      onError?: {
        message: string;
        status?: number;
        error: any;
      };
    };

export const browserlessAgent: AgentFunction<BrowserlessParams, BrowserlessResult, BrowserlessInputs, DefaultConfigData> = async ({ namedInputs, params }) => {
  const { url, text_content } = namedInputs;
  const throwError = params?.throwError ?? false;

  const browserlessEndpoint = "https://chrome.browserless.io";
  const browserlessToken = params?.apiKey ??
    (typeof process !== "undefined" &&
     process?.env?.BROWSERLESS_API_TOKEN || null);

  // Check if API token is provided
  if (!browserlessToken) {
    const errorMessage = "Browserless API token is required. Please set the BROWSERLESS_API_TOKEN environment variable.";
    throw new Error(errorMessage);
  }

  let endpoint: string;
  let requestBody: {
    url: string;
    elements?: {
      selector: string;
    }[];
  };

  if (text_content) {
    // scrape endpoint to get text content of the body element
    endpoint = `${browserlessEndpoint}/scrape?token=${browserlessToken}`;
    requestBody = {
      url,
      elements: [
        {
          selector: "body",
        },
      ],
    };
  } else {
    // content endpoint to get full HTML
    endpoint = `${browserlessEndpoint}/content?token=${browserlessToken}`;
    requestBody = {
      url,
    };
  }

  // Return request information in debug mode
  if (params?.debug) {
    return {
      url: endpoint,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    };
  }

  // API request options
  const fetchOptions: RequestInit = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(endpoint, fetchOptions);

    if (!response.ok) {
      const status = response.status;
      const error = await response.text();

      if (throwError) {
        throw new Error(`Browserless HTTP error: ${status}`);
      }

      return {
        onError: {
          message: `Browserless HTTP error: ${status}`,
          status,
          error,
        },
      };
    }

    if (text_content) {
      const jsonResponse = await response.json();
      return jsonResponse.data[0].results[0].text;
    } else {
      return response.text();
    }
  } catch (error) {
    if (throwError) {
      throw error;
    }

    return {
      onError: {
        message: error instanceof Error ? error.message : "Unknown error occurred",
        error: error instanceof Error ? error.toString() : String(error),
      },
    };
  }
};

const browserlessAgentInfo: AgentFunctionInfo = {
  name: "browserlessAgent",
  agent: browserlessAgent,
  mock: browserlessAgent,
  params: {
    type: "object",
    properties: {
      apiKey: {
        type: "string",
        description: "Browserless API key",
      },
      debug: {
        type: "boolean",
        description: "Enable debug mode",
      },
      throwError: {
        type: "boolean",
        description: "Throw error if the request fails",
      },
    },
  },
  inputs: {
    type: "object",
    properties: {
      url: {
        type: "string",
        description: "URL of the web page to scrape or manipulate",
      },
      text_content: {
        type: "boolean",
        description: "If true, returns only the text content of the body element of the page, otherwise returns the full HTML",
      },
    },
    required: ["url"],
  },
  output: {
    type: "string",
  },
  samples: [
    {
      inputs: {
        url: "https://www.example.com",
      },
      params: {},
      result: "<html><body>Hello, world!</body></html>",
    },
    {
      inputs: {
        url: "https://www.example.com",
        text_content: true,
      },
      params: {},
      result: "Hello, world!",
    },
    {
      inputs: {
        url: "https://www.example.com",
      },
      params: {
        debug: true,
      },
      result: {
        url: "https://chrome.browserless.io/content",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { url: "https://www.example.com" },
      },
    },
  ],
  description:
    "An agent that uses Browserless.io to fetch web page content with JavaScript execution support for retrieving data from SPAs and dynamic content",
  category: ["net"],
  author: "kawamataryo",
  repository: "https://github.com/receptron/graphai-agents",
  license: "MIT",
  environmentVariables: ["BROWSERLESS_API_TOKEN"],
};

export default browserlessAgentInfo;
