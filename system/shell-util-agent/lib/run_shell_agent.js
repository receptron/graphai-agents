"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.runShellAgent = exports.runShellCommand = void 0;
const child_process_1 = require("child_process");
const path = __importStar(require("node:path"));
const runShellCommand = (commands, path) => {
    if (!Array.isArray(commands)) {
        throw new Error("runShellAgent error: command must be string[]");
    }
    return new Promise((resolve, reject) => {
        const [command, args] = [commands[0], commands.slice(1)];
        const results = [];
        const stderrs = [];
        const child = (0, child_process_1.spawn)(command, args, { cwd: path ?? process.cwd() });
        child.stdout.on("data", (data) => {
            results.push(data);
        });
        child.stderr.on("data", (data) => {
            stderrs.push(data);
        });
        child.stderr.on("data", (data) => {
            reject({ error: data, stdout: results.join(""), stderr: stderrs.join("") });
        });
        child.on("close", () => {
            resolve({ text: results.join(""), stderr: stderrs.join("") });
        });
    });
};
exports.runShellCommand = runShellCommand;
const runShellAgent = async ({ namedInputs }) => {
    const { baseDir, dirs, commands } = namedInputs;
    const dir = (() => {
        if (dirs) {
            return path.resolve(...dirs);
        }
        if (baseDir) {
            return baseDir;
        }
    })();
    try {
        const result = await (0, exports.runShellCommand)(commands, dir);
        return result;
    }
    catch (err) {
        if (err instanceof Error) {
            return {
                error: err.message,
            };
        }
        const { error, stderr, stdout } = err;
        return { error, stderr, stdout };
    }
};
exports.runShellAgent = runShellAgent;
const runShellAgentInfo = {
    name: "runShellAgent",
    agent: exports.runShellAgent,
    mock: exports.runShellAgent,
    samples: [
        {
            params: {},
            inputs: { commands: ["echo", "1"], baseDir: "./" },
            result: {
                text: "1\n",
                stderr: "",
            },
        },
    ],
    description: "shell utility agent",
    category: ["system"],
    author: "isamu arimoto",
    repository: "https://github.com/receptron/graphai-agents/tree/main/system/shell-util-agent",
    source: "https://github.com/receptron/graphai-agents/tree/main/system/shell-util-agent/src/run_shell_agent.ts",
    package: "@graphai/shell_utilty_agent",
    license: "MIT",
};
exports.default = runShellAgentInfo;
