import { nodeBrowserDetectAgentGenerator } from "./node_browser_detect_agent_generator";
import { nodeBrowserDetectAgentInfoGenerator } from "./node_browser_detect_agent_info";
import { EnvConfig, EnvFunc } from "./type";

const envConf: EnvConfig = {
  envType: "Node",
};

const envFunc: EnvFunc = () => {
  return { message: "isnode" };
};

export const nodeBrowserDetectAgent = nodeBrowserDetectAgentGenerator(true, envConf, envFunc);

const nodeBrowserDetectAgentInfo = nodeBrowserDetectAgentInfoGenerator(nodeBrowserDetectAgent);

export default nodeBrowserDetectAgentInfo;
