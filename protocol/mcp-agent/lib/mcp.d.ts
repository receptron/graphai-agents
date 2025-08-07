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
}) => Promise<unknown>;
export declare const resourcesList: (mcpClients: MCPClients) => Promise<Record<string, unknown[]>>;
export declare const resourceRead: (mcpClients: MCPClients, serviceName: string, params: any) => Promise<unknown>;
export {};
