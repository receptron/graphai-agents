"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mcpToolsListAgent = void 0;
const graphai_1 = require("graphai");
const mcp_1 = require("./mcp");
const mcpToolsListAgent = async ({ params, config }) => {
    const mcpClientsKey = params.mcpClientsKey ?? mcp_1.mcpClientsDefaultKey;
    const mcpClients = (config ?? {})[mcpClientsKey];
    (0, graphai_1.assert)(!!mcpClients, "mcpToolsListAgent: no mcpClients");
    (0, graphai_1.assert)(Object.keys(mcpClients).length > 0, "mcpToolsListAgent: no mcpClients");
    const tools = await (0, mcp_1.toolsList)(mcpClients, params.services || []);
    const llmTools = tools.map((tool) => {
        return {
            type: "function",
            function: tool,
        };
    });
    return { tools, llmTools };
};
exports.mcpToolsListAgent = mcpToolsListAgent;
const mcpToolsListAgentInfo = {
    name: "mcpToolsListAgent",
    agent: exports.mcpToolsListAgent,
    mock: exports.mcpToolsListAgent,
    samples: [
        {
            params: {
                services: ["filesystem"],
            },
            inputs: {},
            result: {
                llmTools: [
                    {
                        function: {
                            description: "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    head: {
                                        description: "If provided, returns only the first N lines of the file",
                                        type: "number",
                                    },
                                    path: {
                                        type: "string",
                                    },
                                    tail: {
                                        description: "If provided, returns only the last N lines of the file",
                                        type: "number",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--read_file",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    head: {
                                        description: "If provided, returns only the first N lines of the file",
                                        type: "number",
                                    },
                                    path: {
                                        type: "string",
                                    },
                                    tail: {
                                        description: "If provided, returns only the last N lines of the file",
                                        type: "number",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--read_text_file",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--read_media_file",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    paths: {
                                        items: {
                                            type: "string",
                                        },
                                        type: "array",
                                    },
                                },
                                required: ["paths"],
                                type: "object",
                            },
                            name: "filesystem--read_multiple_files",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    content: {
                                        type: "string",
                                    },
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path", "content"],
                                type: "object",
                            },
                            name: "filesystem--write_file",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    dryRun: {
                                        default: false,
                                        description: "Preview changes using git-style diff format",
                                        type: "boolean",
                                    },
                                    edits: {
                                        items: {
                                            additionalProperties: false,
                                            properties: {
                                                newText: {
                                                    description: "Text to replace with",
                                                    type: "string",
                                                },
                                                oldText: {
                                                    description: "Text to search for - must match exactly",
                                                    type: "string",
                                                },
                                            },
                                            required: ["oldText", "newText"],
                                            type: "object",
                                        },
                                        type: "array",
                                    },
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path", "edits"],
                                type: "object",
                            },
                            name: "filesystem--edit_file",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--create_directory",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--list_directory",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    path: {
                                        type: "string",
                                    },
                                    sortBy: {
                                        default: "name",
                                        description: "Sort entries by name or size",
                                        enum: ["name", "size"],
                                        type: "string",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--list_directory_with_sizes",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--directory_tree",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    destination: {
                                        type: "string",
                                    },
                                    source: {
                                        type: "string",
                                    },
                                },
                                required: ["source", "destination"],
                                type: "object",
                            },
                            name: "filesystem--move_file",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    excludePatterns: {
                                        default: [],
                                        items: {
                                            type: "string",
                                        },
                                        type: "array",
                                    },
                                    path: {
                                        type: "string",
                                    },
                                    pattern: {
                                        type: "string",
                                    },
                                },
                                required: ["path", "pattern"],
                                type: "object",
                            },
                            name: "filesystem--search_files",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
                            inputSchema: {
                                $schema: "http://json-schema.org/draft-07/schema#",
                                additionalProperties: false,
                                properties: {
                                    path: {
                                        type: "string",
                                    },
                                },
                                required: ["path"],
                                type: "object",
                            },
                            name: "filesystem--get_file_info",
                        },
                        type: "function",
                    },
                    {
                        function: {
                            description: "Returns the list of root directories that this server is allowed to access. Use this to understand which directories are available before trying to access files. ",
                            inputSchema: {
                                properties: {},
                                required: [],
                                type: "object",
                            },
                            name: "filesystem--list_allowed_directories",
                        },
                        type: "function",
                    },
                ],
                tools: [
                    {
                        description: "Read the complete contents of a file as text. DEPRECATED: Use read_text_file instead.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                head: {
                                    description: "If provided, returns only the first N lines of the file",
                                    type: "number",
                                },
                                path: {
                                    type: "string",
                                },
                                tail: {
                                    description: "If provided, returns only the last N lines of the file",
                                    type: "number",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--read_file",
                    },
                    {
                        description: "Read the complete contents of a file from the file system as text. Handles various text encodings and provides detailed error messages if the file cannot be read. Use this tool when you need to examine the contents of a single file. Use the 'head' parameter to read only the first N lines of a file, or the 'tail' parameter to read only the last N lines of a file. Operates on the file as text regardless of extension. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                head: {
                                    description: "If provided, returns only the first N lines of the file",
                                    type: "number",
                                },
                                path: {
                                    type: "string",
                                },
                                tail: {
                                    description: "If provided, returns only the last N lines of the file",
                                    type: "number",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--read_text_file",
                    },
                    {
                        description: "Read an image or audio file. Returns the base64 encoded data and MIME type. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--read_media_file",
                    },
                    {
                        description: "Read the contents of multiple files simultaneously. This is more efficient than reading files one by one when you need to analyze or compare multiple files. Each file's content is returned with its path as a reference. Failed reads for individual files won't stop the entire operation. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                paths: {
                                    items: {
                                        type: "string",
                                    },
                                    type: "array",
                                },
                            },
                            required: ["paths"],
                            type: "object",
                        },
                        name: "filesystem--read_multiple_files",
                    },
                    {
                        description: "Create a new file or completely overwrite an existing file with new content. Use with caution as it will overwrite existing files without warning. Handles text content with proper encoding. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                content: {
                                    type: "string",
                                },
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path", "content"],
                            type: "object",
                        },
                        name: "filesystem--write_file",
                    },
                    {
                        description: "Make line-based edits to a text file. Each edit replaces exact line sequences with new content. Returns a git-style diff showing the changes made. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                dryRun: {
                                    default: false,
                                    description: "Preview changes using git-style diff format",
                                    type: "boolean",
                                },
                                edits: {
                                    items: {
                                        additionalProperties: false,
                                        properties: {
                                            newText: {
                                                description: "Text to replace with",
                                                type: "string",
                                            },
                                            oldText: {
                                                description: "Text to search for - must match exactly",
                                                type: "string",
                                            },
                                        },
                                        required: ["oldText", "newText"],
                                        type: "object",
                                    },
                                    type: "array",
                                },
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path", "edits"],
                            type: "object",
                        },
                        name: "filesystem--edit_file",
                    },
                    {
                        description: "Create a new directory or ensure a directory exists. Can create multiple nested directories in one operation. If the directory already exists, this operation will succeed silently. Perfect for setting up directory structures for projects or ensuring required paths exist. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--create_directory",
                    },
                    {
                        description: "Get a detailed listing of all files and directories in a specified path. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is essential for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--list_directory",
                    },
                    {
                        description: "Get a detailed listing of all files and directories in a specified path, including sizes. Results clearly distinguish between files and directories with [FILE] and [DIR] prefixes. This tool is useful for understanding directory structure and finding specific files within a directory. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                path: {
                                    type: "string",
                                },
                                sortBy: {
                                    default: "name",
                                    description: "Sort entries by name or size",
                                    enum: ["name", "size"],
                                    type: "string",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--list_directory_with_sizes",
                    },
                    {
                        description: "Get a recursive tree view of files and directories as a JSON structure. Each entry includes 'name', 'type' (file/directory), and 'children' for directories. Files have no children array, while directories always have a children array (which may be empty). The output is formatted with 2-space indentation for readability. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--directory_tree",
                    },
                    {
                        description: "Move or rename files and directories. Can move files between directories and rename them in a single operation. If the destination exists, the operation will fail. Works across different directories and can be used for simple renaming within the same directory. Both source and destination must be within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                destination: {
                                    type: "string",
                                },
                                source: {
                                    type: "string",
                                },
                            },
                            required: ["source", "destination"],
                            type: "object",
                        },
                        name: "filesystem--move_file",
                    },
                    {
                        description: "Recursively search for files and directories matching a pattern. Searches through all subdirectories from the starting path. The search is case-insensitive and matches partial names. Returns full paths to all matching items. Great for finding files when you don't know their exact location. Only searches within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                excludePatterns: {
                                    default: [],
                                    items: {
                                        type: "string",
                                    },
                                    type: "array",
                                },
                                path: {
                                    type: "string",
                                },
                                pattern: {
                                    type: "string",
                                },
                            },
                            required: ["path", "pattern"],
                            type: "object",
                        },
                        name: "filesystem--search_files",
                    },
                    {
                        description: "Retrieve detailed metadata about a file or directory. Returns comprehensive information including size, creation time, last modified time, permissions, and type. This tool is perfect for understanding file characteristics without reading the actual content. Only works within allowed directories.",
                        inputSchema: {
                            $schema: "http://json-schema.org/draft-07/schema#",
                            additionalProperties: false,
                            properties: {
                                path: {
                                    type: "string",
                                },
                            },
                            required: ["path"],
                            type: "object",
                        },
                        name: "filesystem--get_file_info",
                    },
                    {
                        description: "Returns the list of root directories that this server is allowed to access. Use this to understand which directories are available before trying to access files. ",
                        inputSchema: {
                            properties: {},
                            required: [],
                            type: "object",
                        },
                        name: "filesystem--list_allowed_directories",
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
exports.default = mcpToolsListAgentInfo;
