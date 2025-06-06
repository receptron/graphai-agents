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
import { streamAgentFilterGenerator } from  "@graphai/stream_agent_filter";
import * as vanilla from "@graphai/vanilla";

import { graphData } from "./data";

import webLlmAgent, { modelLoad, loadEngine, CallbackReport } from "./agents/web_llm_agent";

export default defineComponent({
  setup() {
    loadEngine();
    const loading = ref("");
    const ready = ref(false);

    modelLoad((report: CallbackReport) => {
      if (report.progress === 1) {
        ready.value = true;
      }
      loading.value = report.text;
      console.log(report.text, ready.value);
    });

    const response = ref("");
    const callback = (__, token) => {
      // console.log(token);
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
