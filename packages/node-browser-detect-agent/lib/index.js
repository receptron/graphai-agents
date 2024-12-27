"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeBrowserDetect2Agent = exports.nodeBrowserDetectAgent = void 0;
// default is node
const node_browser_detect_agent_node_1 = __importDefault(require("./node_browser_detect_agent_node"));
exports.nodeBrowserDetectAgent = node_browser_detect_agent_node_1.default;
const node_browser_detect2_agent_node_1 = __importDefault(require("./node_browser_detect2_agent_node"));
exports.nodeBrowserDetect2Agent = node_browser_detect2_agent_node_1.default;
