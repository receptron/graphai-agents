import * as packages from "@graphai/extra-agents";
import { generateMonoDoc } from "@receptron/agentdoc"
import * as sys from "@graphai/shell_utilty_agent";

const main = () => {
  const base_path = __dirname + "/../docs/agentDocs/";
  generateMonoDoc(base_path, { ...packages, ...sys });
};

main();
