import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    recipes: defineCollection({
      type: 'page',
      source: '*.md',
      // Define custom schema for docs collection
      schema: z.object({
        category: z.string(),
        source: z.string().optional(),
        ingredients: z.array(z.string()).default([]),
      }),
    }),
  },
})
