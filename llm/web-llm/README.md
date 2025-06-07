
## web llm

### Run preset llama

```typescript
import { webLlmAgentGenerator, CallbackReport } from "@graphai/web_llm_agent";

let ready = false;
const { webLlmAgent, loadEngine } = webLlmAgentGenerator({
  modelId: "Llama-3.2-3B-Instruct-q4f32_1-MLC",
  callback: (report: CallbackReport) => {
    if (report.progress === 1) {
      ready = true;
    }
  },
});

loadEngine();

const graphai = new GraphAI(graphData, { ...vanilla, webLlmAgent });
// wait ready become true;
await graphai.run();

````

### Run custom model

```typescript
import * as webllm from "@mlc-ai/web-llm";
import { webLlmAgentGenerator, CallbackReport, pushModelList } from "@graphai/web_llm_agent";

const model_list = [
  {
    model: "https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct-q4f32_1-MLC",
    model_id: "TinySwallow-1.5B",
    model_lib: webllm.modelLibURLPrefix + webllm.modelVersion + "/Qwen2-1.5B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
  },
];
pushModelList(model_list);

let ready = false;
const { webLlmAgent, loadEngine } = webLlmAgentGenerator({
  modelId: "TinySwallow-1.5B",
  callback: (report: CallbackReport) => {
    if (report.progress === 1) {
      ready = true;
    }
  },
});

loadEngine();

const graphai = new GraphAI(graphData, { ...vanilla, webLlmAgent });
// wait ready become true;
await graphai.run();

````

