import { assert } from "graphai";
import type { AgentFunction, AgentFunctionInfo } from "graphai";
import { toolsList, mcpClientsDefaultKey } from "./mcp";

export const mcpToolsListAgent: AgentFunction<{ services?: string[]; mcpClientsKey?: string }> = async ({ params, config }) => {
  const mcpClientsKey = params.mcpClientsKey ?? mcpClientsDefaultKey;
  const mcpClients = (config ?? {})[mcpClientsKey];

  assert(!!mcpClients, "mcpToolsListAgent: no mcpClients");
  assert(Object.keys(mcpClients).length > 0, "mcpToolsListAgent: no mcpClients");

  const tools = await toolsList(mcpClients, params.services || []);
  const llmTools = tools.map((tool) => {
    return {
      type: "function",
      function: tool,
    };
  });
  return { tools, llmTools };
};

const readFileToolData = {
  name: "filesystem--read_file",
  title: "Read File (Deprecated)",
  description: "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      tail: {
        type: "number",
        description: "If provided, returns only the last N lines of the file",
      },
      head: {
        type: "number",
        description: "If provided, returns only the first N lines of the file",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const readTextFileToolData = {
  name: "filesystem--read_text_file",
  title: "Read Text File",
  description:
    "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      tail: {
        type: "number",
        description: "If provided, returns only the last N lines of the file",
      },
      head: {
        type: "number",
        description: "If provided, returns only the first N lines of the file",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const readMediaFileToolData = {
  name: "filesystem--read_media_file",
  title: "Read Media File",
  description: "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["image", "audio", "blob"],
            },
            data: {
              type: "string",
            },
            mimeType: {
              type: "string",
            },
          },
          required: ["type", "data", "mimeType"],
          additionalProperties: false,
        },
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const readMultipleFilesToolData = {
  name: "filesystem--read_multiple_files",
  title: "Read Multiple Files",
  description:
    "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      paths: {
        type: "array",
        items: {
          type: "string",
        },
        minItems: 1,
        description: "Array of file paths to read. Each path must be a string pointing to a valid file within allowed directories.",
      },
    },
    required: ["paths"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const writeFileToolData = {
  name: "filesystem--write_file",
  title: "Write File",
  description:
    "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      content: {
        type: "string",
      },
    },
    required: ["path", "content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: false,
    destructiveHint: true,
    idempotentHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const editFileToolData = {
  name: "filesystem--edit_file",
  title: "Edit File",
  description:
    "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      edits: {
        type: "array",
        items: {
          type: "object",
          properties: {
            oldText: {
              type: "string",
              description: "Text to search for - must match exactly",
            },
            newText: {
              type: "string",
              description: "Text to replace with",
            },
          },
          required: ["oldText", "newText"],
          additionalProperties: false,
        },
      },
      dryRun: {
        type: "boolean",
        default: false,
        description: "Preview changes using git-style diff format",
      },
    },
    required: ["path", "edits"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: false,
    destructiveHint: true,
    idempotentHint: false,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const createDirectoryToolData = {
  name: "filesystem--create_directory",
  title: "Create Directory",
  description:
    "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const listDirectoryToolData = {
  name: "filesystem--list_directory",
  title: "List Directory",
  description:
    "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const listDirectoryWithSizesToolData = {
  name: "filesystem--list_directory_with_sizes",
  title: "List Directory with Sizes",
  description:
    "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      sortBy: {
        type: "string",
        enum: ["name", "size"],
        default: "name",
        description: "Sort entries by name or size",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const directoryTreeToolData = {
  name: "filesystem--directory_tree",
  title: "Directory Tree",
  description:
    "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      excludePatterns: {
        type: "array",
        items: {
          type: "string",
        },
        default: [],
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const moveFileToolData = {
  name: "filesystem--move_file",
  title: "Move File",
  description:
    "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      source: {
        type: "string",
      },
      destination: {
        type: "string",
      },
    },
    required: ["source", "destination"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const searchFilesToolData = {
  name: "filesystem--search_files",
  title: "Search Files",
  description:
    "Recursively search for files and directories matching a pattern. The patterns should be glob-style patterns that match paths relative to the working directory. Use pattern like '*.ext' to match files in current directory, and '**/*.ext' to match files in all subdirectories. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
      pattern: {
        type: "string",
      },
      excludePatterns: {
        type: "array",
        items: {
          type: "string",
        },
        default: [],
      },
    },
    required: ["path", "pattern"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const getFileInfoToolData = {
  name: "filesystem--get_file_info",
  title: "Get File Info",
  description:
    "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
      },
    },
    required: ["path"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const listAllowedDirectoriesToolData = {
  name: "filesystem--list_allowed_directories",
  title: "List Allowed Directories",
  description:
    "Returns the list of directories that this server is allowed to access. Subdirectories within these allowed directories are also accessible. Use this to understand which directories and their nested paths are available before trying to access files.",
  inputSchema: {
    type: "object",
    properties: {},
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  outputSchema: {
    type: "object",
    properties: {
      content: {
        type: "string",
      },
    },
    required: ["content"],
    additionalProperties: false,
    $schema: "http://json-schema.org/draft-07/schema#",
  },
  annotations: {
    readOnlyHint: true,
  },
  execution: {
    taskSupport: "forbidden",
  },
};

const allTools = [
  readFileToolData,
  readTextFileToolData,
  readMediaFileToolData,
  readMultipleFilesToolData,
  writeFileToolData,
  editFileToolData,
  createDirectoryToolData,
  listDirectoryToolData,
  listDirectoryWithSizesToolData,
  directoryTreeToolData,
  moveFileToolData,
  searchFilesToolData,
  getFileInfoToolData,
  listAllowedDirectoriesToolData,
];

const mcpToolsListAgentInfo: AgentFunctionInfo = {
  name: "mcpToolsListAgent",
  agent: mcpToolsListAgent,
  mock: mcpToolsListAgent,

  samples: [
    {
      params: {
        services: ["filesystem"],
      },
      inputs: {},
      result: {
        llmTools: allTools.map((tool) => ({
          type: "function",
          function: tool,
        })),
        tools: allTools,
      },
    },
  ],
  description: "Model Context Protocol Tools/List Agent",
  category: ["protocol"],
  author: "isamu arimoto",
  repository: "https://github.com/receptron/graphai-agents",
  source: "https://github.com/receptron/graphai-agents/tree/main/protocol/mcp-agent/src/mcp_tools_list_agent.ts",
  package: "@graphai/mcp_agent",
  license: "MIT",
};

export default mcpToolsListAgentInfo;
