// import { GraphAI } from "@graphai/all";
import { GraphAI, agents } from "../src/";

const main = async () => {
  const graphData = {
    version: 0.5,
    nodes: {
      init: { value: "hello" },
      result: {
        agent: "copyAgent",
        inputs: {
          text: ":init",
        },
        isResult: true,
      },
    },
  };
  console.log(Object.keys(agents));
  const graphai = new GraphAI(graphData, agents);
  const result = await graphai.run();
  console.log(result);
};

main();
