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
        llmTools: [
          {
            type: "function",
            function: {
              name: "filesystem--read_file",
              description:
                "Read the complete contents of a file from the file system. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Only works within allowed directories.",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--read_multiple_files",
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
                  },
                },
                required: ["paths"],
                additionalProperties: false,
                $schema: "http://json-schema.org/draft-07/schema#",
              },
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--write_file",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--edit_file",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--create_directory",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--list_directory",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--directory_tree",
              description:
                "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--move_file",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--search_files",
              description:
                "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--get_file_info",
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
            },
          },
          {
            type: "function",
            function: {
              name: "filesystem--list_allowed_directories",
              description:
                "Returns the list of directories that this server is allowed to access. Use this to understand which directories are available before trying to access files.",
              inputSchema: {
                type: "object",
                properties: {},
                required: [],
              },
            },
          },
        ],
        tools: [
          {
            name: "filesystem--read_file",
            description:
              "Read the complete contents of a file from the file system. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Only works within allowed directories.",
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
          },
          {
            name: "filesystem--read_multiple_files",
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
                },
              },
              required: ["paths"],
              additionalProperties: false,
              $schema: "http://json-schema.org/draft-07/schema#",
            },
          },
          {
            name: "filesystem--write_file",
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
          },
          {
            name: "filesystem--edit_file",
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
          },
          {
            name: "filesystem--create_directory",
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
          },
          {
            name: "filesystem--list_directory",
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
          },
          {
            name: "filesystem--directory_tree",
            description:
              "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
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
          },
          {
            name: "filesystem--move_file",
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
          },
          {
            name: "filesystem--search_files",
            description:
              "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
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
          },
          {
            name: "filesystem--get_file_info",
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
          },
          {
            name: "filesystem--list_allowed_directories",
            description:
              "Returns the list of directories that this server is allowed to access. Use this to understand which directories are available before trying to access files.",
            inputSchema: {
              type: "object",
              properties: {},
              required: [],
            },
          },
        ],
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
