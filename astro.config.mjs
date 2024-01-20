import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
;
import vue from "@astrojs/vue";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
      applyBaseStyles: true,
      nesting: true
    }),
    vue()
  ]
});