import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
;
import vue from "@astrojs/vue";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind({
    configFile: './tailwind.config.mjs',
    applyBaseStyles: true,
    nesting: true
  }), vue()],
  redirects: {
    "/[...pathName]": "/api/[...pathName]"
  }
});