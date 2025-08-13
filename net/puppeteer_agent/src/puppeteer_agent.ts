import type { AgentFunction, AgentFunctionInfo } from "graphai";
import puppeteer, { Page } from "puppeteer";
import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

type Article = {
  url: string;
  title: string | null;
  byline: string | null;
  excerpt: string | null;
  length: number | null;
  textContent: string | null;
};

const NAV_TIMEOUT = 45_000;
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const normalize = (s: string) =>
  s
    .replace(/\r\n/g, "\n")
    .replace(/[\n\t]{2,}/g, "\n")
    .trim();

/* global document */
async function waitStable(page: Page, ms = 1200, step = 200) {
  let last = -1;
  let stable = 0;
  while (stable < ms) {
    const len = await page.evaluate(() => document.body?.innerText?.length || 0);
    stable = len === last ? stable + step : 0;
    last = len;
    await new Promise((r) => setTimeout(r, step));
  }
}

async function fetchArticle(url: string): Promise<Article> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage();

  await page.setUserAgent(userAgent);
  await page.setViewport({ width: 1366, height: 900 });

  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: NAV_TIMEOUT });

    await Promise.race([page.waitForSelector("article, main, [role=main], .article, .post", { timeout: 8000 }), new Promise((r) => setTimeout(r, 8000))]);

    await waitStable(page, 1200);

    const html = await page.content();
    const dom = new JSDOM(html, { url: page.url() });
    const reader = new Readability(dom.window.document);
    const a = reader.parse();

    const title = a?.title || (await page.title()) || null;
    const text = normalize(a?.textContent || "");

    let finalText = text;
    if (finalText.length < 100) {
      const raw = await page.evaluate(() => {
        const el = document.querySelector("article, main, [role=main], .article, .post") || document.body;
        return el?.textContent || "";
      });
      finalText = normalize(raw);
    }

    return {
      url,
      title,
      byline: a?.byline || null,
      excerpt: a?.excerpt || null,
      length: a?.length ?? (finalText?.length || null),
      textContent: finalText || null,
    };
  } finally {
    await page.close().catch(() => {});
    await browser.close().catch(() => {});
  }
}

export const puppeteerAgent: AgentFunction = async ({ namedInputs, params }) => {
  const { url } = namedInputs;

  try {
    const data = await fetchArticle(url);

    return {
      title: data?.title,
      content: (data?.title ?? "") + "\n" + (data?.textContent ?? ""),
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
