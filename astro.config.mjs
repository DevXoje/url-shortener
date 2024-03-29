import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
    maxDuration: 8,
  }),
  integrations: [
    tailwind({
      configFile: "./tailwind.config.mjs",
      applyBaseStyles: true,
      nesting: true,
    }),
    vue({
      include: ["**/*.vue"],
    }),
    react({
      include: ["**/react/*"],
    }),
  ],
  redirects: {
    "/short/[...pathName]": "/api/[...pathName]",
  },
});