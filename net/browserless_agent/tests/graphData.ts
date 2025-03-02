import { GraphData, graphDataLatestVersion } from "graphai";

// Graph for testing content retrieval
export const graphDataContent: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "browserlessAgent",
      inputs: {
        url: "https://example.com",
      },
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

// Graph for testing text content retrieval
export const graphDataTextContent: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "browserlessAgent",
      inputs: {
        url: "https://example.com",
        text_content: true,
      },
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

// Graph for testing missing API token
export const graphDataNoToken: GraphData = {
  version: graphDataLatestVersion,
  nodes: {
    start: {
      agent: "browserlessAgent",
      inputs: {
        url: "https://example.com",
      },
    },
    success: {
      agent: "copyAgent",
      inputs: {
        value: {
          nodeId: "start",
        },
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
      agent: "browserlessAgent",
      inputs: {
        url: "https://error.example.com",
      },
      params: {
        throwError: false,
      },
    },
    error: {
      agent: "copyAgent",
      inputs: {
        value: {
          nodeId: "start",
          propIds: ["onError"],
        },
      },
      isResult: true,
    },
  },
};
