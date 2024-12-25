import { AgentFunction, AgentFunctionContext } from "graphai";
import { EnvConfig, EnvFunc } from "./type";
import { nodeBrowserDetectAgentInfo } from "./node_browser_detect_agent_info";

const envConf: EnvConfig = {
  envType: "Node",
};

const envFunc: EnvFunc = () => {
  return { message: "isnode" };
};

const nodeBrowserDetectAgentBase: (context: AgentFunctionContext) => (envConf: EnvConfig, envFunc: EnvFunc) => Promise<any>  = ({  params, namedInputs }) => {
  return async (envConf: EnvConfig, envFunc: EnvFunc) => {
    console.log(envConf);
    console.log(envFunc());
    return { params, namedInputs };
  };
};

export const nodeBrowserDetectAgent: AgentFunction = async (context) => {
  return await nodeBrowserDetectAgentBase(context)(envConf, envFunc);
};
  
const retNodeBrowserDetectAgentInfo = {...nodeBrowserDetectAgentInfo};
retNodeBrowserDetectAgentInfo.agent = nodeBrowserDetectAgent;

export default retNodeBrowserDetectAgentInfo;
