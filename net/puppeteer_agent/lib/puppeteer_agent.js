"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppeteerAgent = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const readability_1 = require("@mozilla/readability");
const jsdom_1 = require("jsdom");
const puppeteerAgent = async ({ namedInputs, params }) => {
    const { url } = namedInputs;
    try {
        const browser = await puppeteer_1.default.launch();
        const page = await browser.newPage();
        //console.log(1);
        await page.goto(url, { waitUntil: "networkidle2" });
        // console.log(2);
        const html = await page.content();
        const dom = new jsdom_1.JSDOM(html, { url: page.url() });
        const reader = new readability_1.Readability(dom.window.document);
        const article = reader.parse();
        // console.log(3);
        await browser.close();
        return {
            title: article?.title,
            content: (article?.title ?? "") +
                "\n" +
                (article?.textContent ?? "")
                    .replace(/\r\n/g, "\n")
                    .replace(/(\n[ \t]*){2,}/g, "\n")
                    .trim(),
        };
    }
    catch (error) {
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
exports.puppeteerAgent = puppeteerAgent;
const puppeteerAgentInfo = {
    name: "puppeteerAgent",
    agent: exports.puppeteerAgent,
    mock: exports.puppeteerAgent,
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
exports.default = puppeteerAgentInfo;
