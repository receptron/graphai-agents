import { pdf2textAgent } from "../src/";
import fs from "fs";

import test from "node:test";

test("test pdf2textAgent: buffer, text", async () => {
  const path = __dirname + "/2410.14735v2.pdf";
  const pdfBuffer = fs.readFileSync(path);

  const namedInputs = { buffer: pdfBuffer };
  const params = {};
  const res = await pdf2textAgent.agent({
    namedInputs,
    params,
    filterParams: {},
    debugInfo: { verbose: false, nodeId: "test", retry: 5, state: "executing", subGraphs: new Map() },
  });

  if (res) {
    console.log(res);
  }
});

test("test pdf2textAgent: buffer, md", async () => {
  const path = __dirname + "/2410.14735v2.pdf";
  const pdfBuffer = fs.readFileSync(path);

  const namedInputs = { buffer: pdfBuffer };
  const params = { type: "md" };
  const res = await pdf2textAgent.agent({
    namedInputs,
    params,
    filterParams: {},
    debugInfo: { verbose: false, nodeId: "test", retry: 5, state: "executing", subGraphs: new Map() },
  });

  if (res) {
    console.log(res.text);
  }
});
