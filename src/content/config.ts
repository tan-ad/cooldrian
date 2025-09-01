import { defineCollection, z } from 'astro:content'

const thoughts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Tech', 'Life']),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    summary: z.string(),
    links: z.array(z.object({ 
      label: z.string(), 
      href: z.string().url() 
    })).default([]),
    featured: z.boolean().default(false)
  })
})

export const collections = { thoughts, projects }

