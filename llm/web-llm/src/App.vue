<template>
  <main>
    <div class="h-screen w-full">
      hello
      <div></div>
      <div>
        {{ loading }}
      </div>
      <button @click="run">Run</button>
      <div>
        {{ response }}
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { GraphAI } from "graphai";
import { streamAgentFilterGenerator } from "@graphai/stream_agent_filter";
import * as vanilla from "@graphai/vanilla";

import { graphData } from "./data";

//import webLlmAgent, { modelLoadCallback, loadEngine, CallbackReport } from "./agents/web_llm_agent";
import * as webllm from "@mlc-ai/web-llm";
import { webLlmAgentGenerator } from "./agents/web_llm_agent_generator";

const appConfig = {
  model_list: [
    {
      model: "https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct-q4f32_1-MLC",
      model_id: "TinySwallow-1.5B",
      model_lib:
      // https://github.com/mlc-ai/binary-mlc-llm-libs/tree/main/web-llm-models/v0_2_48
      webllm.modelLibURLPrefix + webllm.modelVersion + "/Qwen2-1.5B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
    },
  ],
};
export default defineComponent({
  setup() {
    const loading = ref("");
    const ready = ref(false);

    const {
      webLlmAgent,
      loadEngine,
    } = webLlmAgentGenerator({
      modelId: "TinySwallow-1.5B",
      appConfig,
      callback: (report: CallbackReport) => {
        if (report.progress === 1) {
          ready.value = true;
        }
        loading.value = report.text;
        console.log(report.text, ready.value);
      }
    });
    loadEngine();

    // stream
    const response = ref("");
    const callback = (__, token) => {
      response.value = response.value + token;
    };

    const streamAgentFilter = streamAgentFilterGenerator(callback);
    const agentFilters = [
      {
        name: "streamAgentFilter",
        agent: streamAgentFilter,
      },
    ];

    const run = async () => {
      const graphai = new GraphAI(graphData, { ...vanilla, webLlmAgent }, { agentFilters });
      // graphai.registerCallback(console.log);
      await graphai.run();
    };

    return {
      run,
      loading,
      response,
    };
  },
});
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
