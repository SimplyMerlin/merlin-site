import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import { remarkReadingTime } from "./remark-reading-time.ts";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      // _blank for external links
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  site: "https://simplymerlin.com",
  integrations: [mdx(), sitemap(), tailwind()],
});
