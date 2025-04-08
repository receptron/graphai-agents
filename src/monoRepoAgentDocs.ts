import * as packages from "@graphai/extra-agents";
import { generateMonoDoc } from "@receptron/agentdoc"
import * as sys from "@graphai/shell_utilty_agent";

const main = () => {
  const base_path = __dirname + "/../docs/agentDocs/";
  const newPackages = Object.keys(packages).reduce((tmp, key) => {
    if ("agent" in packages[key]) {
      tmp[key] = packages[key];
    }
    return tmp;
  }, {});
  generateMonoDoc(base_path, { ...newPackages, ...sys });
};

main();
