<template>
  <main>
    <div class="h-screen w-full">
      hello
      <div></div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { GraphAI } from "graphai";
import * as vanilla from "@graphai/vanilla";

import { graphData } from "./data";

export default defineComponent({
  setup() {
    const run = async () => {
      const graphai = new GraphAI(graphData, vanilla);
      graphai.registerCallback(console.log);
      await graphai.run();
    };
    run();

    return {
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
