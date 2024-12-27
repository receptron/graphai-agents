import { sttOpenaiAgent } from "../src/index";
import path from "path";
import fs from "fs";

const main = async () => {
  const file = path.resolve(path.join(__dirname, "test.m4a"));
  const stream = fs.createReadStream(file);
  const res = await sttOpenaiAgent.agent({
    params: {
      stream,
    },
    namedInputs: {},
    debugInfo: {
      retry: 1,
      nodeId: "",
      verbose: true,
    },
    filterParams: [],
  });

  console.log(res);
};

main();
