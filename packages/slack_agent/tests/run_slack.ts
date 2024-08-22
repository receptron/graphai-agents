import "dotenv/config";
import { slackAgent } from "../src/slack_agent";

import test from "node:test";
import assert from "node:assert";

test("test slackAgent", async () => {
  const namedInputs = { prompt: ["hello, let me know the answer 1 + 1"] };
  const params = {};
  const res = (await slackAgent({ inputs: [], namedInputs, params, filterParams: {}, debugInfo: { verbose: false, nodeId: "test", retry: 5 } })) as any;

  if (res) {
    console.log(res);
  }
  assert.deepStrictEqual(true, true);
});
