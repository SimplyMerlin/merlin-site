import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    datePublished: z.coerce.date(),
  }),
});
const snippetCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/snippets" }),
  schema: z.object({
    title: z.string(),
    datePublished: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  snippets: snippetCollection,
};
