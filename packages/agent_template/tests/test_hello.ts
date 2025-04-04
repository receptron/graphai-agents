import { templateAgent } from "../src/template_agent";

import test from "node:test";
import assert from "node:assert";

test("test templateAgent", async () => {
  const namedInputs = {};
  const params = {};
  const res = await templateAgent({
    namedInputs,
    params,
    filterParams: {},
    debugInfo: { verbose: false, nodeId: "test", retry: 5, state: "executing", subGraphs: new Map() },
  });

  if (res) {
    console.log(res);
  }
  assert.deepStrictEqual(res, { params: {}, namedInputs: {} });
});
