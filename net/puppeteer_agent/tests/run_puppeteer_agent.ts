import { defaultTestContext } from "graphai";
import puppeteerAgent from "../src/puppeteer_agent";

import test from "node:test";
import assert from "node:assert";

test("test brave search", async () => {
  const res = await puppeteerAgent.agent({...defaultTestContext, namedInputs: {url: "https://github.com/receptron/mulmocast-app/"}, });
  console.log(res);
});
