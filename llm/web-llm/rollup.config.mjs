import pluginTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./src/composables/cytoscape.ts",
    output: {
      file: "./lib/bundle.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    external: ["graphai", "vue", "cytoscape", "cytoscape-klay"],
    plugins: [resolve(), commonjs(), pluginTypescript()],
  },
  {
    input: "./src/composables/cytoscape.ts",
    output: {
      file: "./lib/bundle.cjs.min.js",
      format: "cjs",
      sourcemap: true,
    },
    external: ["graphai", "vue", "cytoscape", "cytoscape-klay"],
    plugins: [resolve(), commonjs(), pluginTypescript(), terser()],
  },
  {
    input: "./src/composables/cytoscape.ts",
    output: {
      file: "./lib/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
    external: ["graphai", "vue", "cytoscape", "cytoscape-klay"],
    plugins: [resolve(), commonjs(), pluginTypescript()],
  },
  {
    input: "./src/composables/cytoscape.ts",
    output: {
      file: "./lib/bundle.esm.min.js",
      format: "esm",
      sourcemap: true,
    },
    external: ["graphai", "vue", "cytoscape", "cytoscape-klay"],
    plugins: [resolve(), commonjs(), pluginTypescript(), terser()],
  },
  {
    input: "./src/composables/cytoscape.ts",
    output: {
      name: "vue_cytoscape",
      file: "./lib/bundle.umd.js",
      format: "umd",
      sourcemap: true,
      globals: {
        graphai: 'graphai',
        vue: 'Vue',
        cytoscape: 'cytoscape',
        "cytoscape-klay": "cytoscapeKlay",
        "klay": "cytoscapeKlay",
      },
    },
    external: ["graphai", "vue", "cytoscape", "cytoscape-klay"],
    plugins: [resolve(), commonjs(), pluginTypescript()],
  },
];
