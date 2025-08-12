import type { AgentFunction, AgentFunctionInfo } from "graphai";
import puppeteer from "puppeteer";
import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

export const puppeteerAgent: AgentFunction = async ({ namedInputs, params }) => {
  const { url } = namedInputs;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //console.log(1);
    await page.goto(url, { waitUntil: "networkidle2" });
    // console.log(2);

    const html = await page.content();
    const dom = new JSDOM(html, { url: page.url() });

    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    // console.log(3);

    await browser.close();

    return {
      title: article?.title,
      content:
        (article?.title ?? "") +
        "\n" +
        (article?.textContent ?? "")
          .replace(/\r\n/g, "\n")
          .replace(/(\n[ \t]*){2,}/g, "\n")
          .trim(),
    };
  } catch (error) {
    if (params.supressError) {
      return {
        onError: {
          message: "puppeteerAgent error",
          error,
        },
      };
    }

    throw new Error(`puppeteerAgent error: ${error}`);
  }
};

const puppeteerAgentInfo: AgentFunctionInfo = {
  name: "puppeteerAgent",
  agent: puppeteerAgent,
  mock: puppeteerAgent,
  samples: [
    {
      params: {},
      inputs: {},
      result: {},
    },
  ],
  tools: [
    {
      type: "function",
      function: {
        name: "puppeteerAgent--openUrl",
        description: "open web url",
        parameters: {
          type: "object",
          properties: {
            url: {
              type: "string",
              description: "web site url",
            },
          },
          required: ["url"],
        },
      },
    },
  ],
  description: "Puppeteer Agent",
  category: ["net"],
  repository: "https://github.com/receptron/mulmocast-app",
  author: "Receptron team",
  license: "MIT",
};

export default puppeteerAgentInfo;
