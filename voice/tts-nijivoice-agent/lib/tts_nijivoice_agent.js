"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ttsNijivoiceAgent = void 0;
const nijovoiceApiKey = process.env.NIJIVOICE_API_KEY ?? "";
const ttsNijivoiceAgent = async ({ params, namedInputs }) => {
    const { apiKey, supressError, voice } = params;
    const { text } = namedInputs;
    const url = `https://api.nijivoice.com/api/platform/v1/voice-actors/${voice}/generate-voice`;
    const options = {
        method: "POST",
        headers: {
            "x-api-key": apiKey ?? nijovoiceApiKey,
            accept: "application/json",
            "content-type": "application/json",
        },
        body: JSON.stringify({
            format: "mp3",
            speed: "1.0",
            script: text,
        }),
    };
    try {
        const voiceRes = await fetch(url, options);
        const voiceJson = await voiceRes.json();
        if (voiceJson && voiceJson.generatedVoice && voiceJson.generatedVoice.audioFileDownloadUrl) {
            const audioRes = await fetch(voiceJson.generatedVoice.audioFileDownloadUrl);
            const buffer = Buffer.from(await audioRes.arrayBuffer());
            return { buffer, generatedVoice: voiceJson.generatedVoice };
        }
        if (supressError) {
            return {
                onError: {
                    message: "TTS Nijivoice Error",
                    error: voiceJson,
                },
            };
        }
        console.error(voiceJson);
        throw new Error("TTS Nijivoice Error");
    }
    catch (e) {
        if (supressError) {
            return {
                onError: {
                    message: "TTS Nijivoice Error",
                    error: e,
                },
            };
        }
        console.error(e);
        throw new Error("TTS Nijivoice Error");
    }
};
exports.ttsNijivoiceAgent = ttsNijivoiceAgent;
const ttsNijivoiceAgentInfo = {
    name: "ttsNijivoiceAgent",
    agent: exports.ttsNijivoiceAgent,
    mock: exports.ttsNijivoiceAgent,
    samples: [],
    description: "TTS nijivoice agent",
    category: ["voice"],
    author: "Receptron Team",
    repository: "https://github.com/receptron/graphai-agents/tree/main/tts/tts-nijivoice-agent",
    source: "https://github.com/receptron/graphai-agents/tree/main/voice/tts-nijivoice-agent/src/tts_nijivoice_agent.ts",
    package: "@graphai/tts_nijivoice_agent",
    license: "MIT",
    environmentVariables: ["NIJIVOICE_API_KEY"],
};
exports.default = ttsNijivoiceAgentInfo;
