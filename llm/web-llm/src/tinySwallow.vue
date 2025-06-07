<template>
  <div class="mt-2">
    <h2 class="text-bold">TinySwallow</h2>
    <div>
      {{ loading }}
    </div>
    <button @click="run">Run</button>
    <div>
      {{ response }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { GraphAI } from "graphai";
import { streamAgentFilterGenerator } from "@graphai/stream_agent_filter";
import * as vanilla from "@graphai/vanilla";

import { graphData } from "./data";

import { webLlmAgentGenerator, CallbackReport } from "./agents/web_llm_agent_generator";

export default defineComponent({
  setup() {
    const loading = ref("");
    const ready = ref(false);

    const { webLlmAgent, loadEngine } = webLlmAgentGenerator({
      modelId: "TinySwallow-1.5B",
      callback: (report: CallbackReport) => {
        if (report.progress === 1) {
          ready.value = true;
        }
        loading.value = report.text;
        console.log(report.text, ready.value);
      },
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
