import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: './tailwind.config.mjs',
    applyBaseStyles: true,
    nesting: true
  }), vue({
    template: {
      compilerOptions: {
      },
    },
  })]
});