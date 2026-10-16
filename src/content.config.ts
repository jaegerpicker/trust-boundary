import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    audience: z.enum(['product', 'security', 'shared']).default('shared'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    format: z.enum([
      'system-deep-dive',
      'flight-log',
      'postmortem',
      'cross-system-test',
    ]).optional(),
  }).refine((data) => data.draft || data.pubDate !== undefined, {
    message: 'Published articles require a publication date',
    path: ['pubDate'],
  }),
});

export const collections = { blog };
