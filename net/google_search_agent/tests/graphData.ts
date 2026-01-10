import { GraphData, graphDataLatestVersion } from "graphai";

// Graph for testing search
export const graphDataSearch: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "googleSearchAgent",
      inputs: {
        query: "graphai",
      },
      params: {
        apiKey: "apiKey",
        cx: "CX",
        debug: true,
      }
    },
    success: {
      agent: "copyAgent",
      inputs: {
        items: ":start.items",
      },
      isResult: true,
    },
  },
};

// Graph for testing missing API key
export const graphDataNoAPIKey: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "googleSearchAgent",
      inputs: {
        query: "graphai",
      },
      params: {
        cx: "CX",
        debug: true,
      }
    },
    success: {
      agent: "copyAgent",
      inputs: {
        result: ":start",
      },
      isResult: true,
    },
  },
};

// Graph for testing missing CX
export const graphDataNoCX: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "googleSearchAgent",
      inputs: {
        query: "graphai",
      },
      params: {
        apiKey: "apiKey",
        debug: true,
      }
    },
    success: {
      agent: "copyAgent",
      inputs: {
        result: ":start",
      },
      isResult: true,
    },
  },
};

// Graph for testing error response handling
export const graphDataErrorResponse: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "googleSearchAgent",
      inputs: {
        query: "error",
      },
      params: {
        apiKey: "apiKey",
        cx: "CX",
        supressError: true,
      },
    },
    error: {
      agent: "copyAgent",
      inputs: {
        result: ":start",
      },
      isResult: true,
    },
  },
};

// Graph for testing api key from env
export const graphDataApiKeyFromEnv: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "googleSearchAgent",
      inputs: {
        query: "graphai",
      },
      params: {
        cx: "CX",
        supressError: true,
      },
    },
    error: {
      agent: "copyAgent",
      inputs: {
        result: ":start",
      },
      isResult: true,
    },
  },
};
