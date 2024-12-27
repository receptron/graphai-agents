"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeBrowserDetectAgent = void 0;
const node_browser_detect_agent_info_1 = require("./node_browser_detect_agent_info");
const envConf = {
    envType: "Node",
};
const envFunc = () => {
    return { message: "isnode" };
};
const nodeBrowserDetectAgentBase = ({ params, namedInputs }) => {
    return async (envConf, envFunc) => {
        console.log(envConf);
        console.log(envFunc());
        return { params, namedInputs };
    };
};
const nodeBrowserDetectAgent = async (context) => {
    return await nodeBrowserDetectAgentBase(context)(envConf, envFunc);
};
exports.nodeBrowserDetectAgent = nodeBrowserDetectAgent;
const retNodeBrowserDetectAgentInfo = { ...node_browser_detect_agent_info_1.nodeBrowserDetectAgentInfo };
retNodeBrowserDetectAgentInfo.agent = exports.nodeBrowserDetectAgent;
exports.default = retNodeBrowserDetectAgentInfo;
