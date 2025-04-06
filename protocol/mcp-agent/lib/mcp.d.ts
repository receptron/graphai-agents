import { Client } from "@modelcontextprotocol/sdk/client/index.js";
export declare const mcpClientsDefaultKey = "mcpClients";
type MCPConfig = Record<string, {
    command: string;
    args: string[];
}>;
type MCPClients = Record<string, Client>;
export declare const mcpInit: (_mcpConfig: MCPConfig) => Promise<MCPClients>;
export declare const mcpClose: (mcpClients: MCPClients) => void;
export declare const toolsList: (mcpClients: MCPClients, services?: string[]) => Promise<{
    name: string;
    description?: string;
    inputSchema: unknown;
}[]>;
export declare const toolsCall: (mcpClients: MCPClients, tools: {
    name: string;
    arguments: unknown;
}) => Promise<import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
    _meta: import("zod").ZodOptional<import("zod").ZodObject<{}, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{}, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{}, import("zod").ZodTypeAny, "passthrough">>>;
}, {
    content: import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
        type: import("zod").ZodLiteral<"text">;
        text: import("zod").ZodString;
    }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
        type: import("zod").ZodLiteral<"text">;
        text: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        type: import("zod").ZodLiteral<"text">;
        text: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">>, import("zod").ZodObject<{
        type: import("zod").ZodLiteral<"image">;
        data: import("zod").ZodString;
        mimeType: import("zod").ZodString;
    }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
        type: import("zod").ZodLiteral<"image">;
        data: import("zod").ZodString;
        mimeType: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        type: import("zod").ZodLiteral<"image">;
        data: import("zod").ZodString;
        mimeType: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">>, import("zod").ZodObject<{
        type: import("zod").ZodLiteral<"resource">;
        resource: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">>]>;
    }, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<{
        type: import("zod").ZodLiteral<"resource">;
        resource: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">>]>;
    }, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<{
        type: import("zod").ZodLiteral<"resource">;
        resource: import("zod").ZodUnion<[import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            text: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">>, import("zod").ZodObject<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, "passthrough", import("zod").ZodTypeAny, import("zod").objectOutputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">, import("zod").objectInputType<import("zod").objectUtil.extendShape<{
            uri: import("zod").ZodString;
            mimeType: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            blob: import("zod").ZodString;
        }>, import("zod").ZodTypeAny, "passthrough">>]>;
    }, import("zod").ZodTypeAny, "passthrough">>]>, "many">;
    isError: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
}>, import("zod").ZodTypeAny, "passthrough">>;
export {};
