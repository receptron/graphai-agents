<template>
  <main>
    <Llama modelId="Llama-3.2-3B-Instruct-q4f32_1-MLC" modelName="Llama" />
    <TinySwallow v-if="false" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as webllm from "@mlc-ai/web-llm";
import { pushModelList } from "./agents/web_llm_agent_generator";

const model_list = [
  {
    model: "https://huggingface.co/SakanaAI/TinySwallow-1.5B-Instruct-q4f32_1-MLC",
    model_id: "TinySwallow-1.5B",
    model_lib: webllm.modelLibURLPrefix + webllm.modelVersion + "/Qwen2-1.5B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
  },
];
pushModelList(model_list);

import TinySwallow from "./tinySwallow.vue";
import Llama from "./llama.vue";

export default defineComponent({
  components: {
    TinySwallow,
    Llama,
  },
  setup() {},
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
