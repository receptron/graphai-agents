import "dotenv/config";
import { sttOpenaiAgent } from "../src/index";
import path from "path";
import fs from "fs";

const main = async () => {
  const filePath = path.resolve(path.join(__dirname, "test.m4a"));
  const file = fs.createReadStream(filePath);
  const res = await sttOpenaiAgent.agent({
    params: {},
    namedInputs: {
      inputStream: file,
    },
    debugInfo: {
      retry: 1,
      nodeId: "",
      verbose: true,
      state: "",
      subGraphs: new Map(),
    },
    filterParams: [],
  });

  console.log(res);
};

main();
