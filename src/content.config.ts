// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    teaser: z.string().optional(),
    date: z.date(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
