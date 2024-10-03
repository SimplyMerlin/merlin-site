import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    datePublished: z.date(),
  }),
});
const snippetCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    datePublished: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  snippets: snippetCollection,
};
