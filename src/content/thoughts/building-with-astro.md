---
title: Building with Astro
date: 2025-01-10
category: Tech
summary: My experience building this site with Astro and why I think it's a great choice for content-focused websites.
tags: [astro, web-development, static-sites]
---

# Building with Astro

I recently rebuilt my personal site using Astro, and I wanted to share my experience and thoughts on why I think it's an excellent choice for content-focused websites.

## What is Astro?

Astro is a modern static site generator that focuses on performance and developer experience. What sets it apart is its "islands architecture" - you can use components from any framework (React, Vue, Svelte, etc.) but by default, no JavaScript is shipped to the client unless you explicitly opt-in.

## Why I Chose Astro

### Performance First

Astro generates static HTML by default, which means incredibly fast load times. The site you're reading right now loads almost instantly because it's just HTML and CSS.

### Framework Agnostic

While I didn't need complex interactivity for this site, knowing that I can add React or Vue components later if needed gives me flexibility.

### Great Developer Experience

The development server is fast, hot reloading works well, and the file-based routing is intuitive. Coming from Next.js, the transition was smooth.

### Content Collections

Astro's content collections feature makes working with Markdown and MDX content a breeze. Type-safe frontmatter, automatic slug generation, and easy querying make content management simple.

## The Build Process

Setting up this site was straightforward:

1. **Project Setup**: `npm create astro@latest`
2. **Add Integrations**: MDX, Tailwind, Sitemap
3. **Configure Content Collections**: Define schemas for posts and projects
4. **Build Components**: Reusable UI components
5. **Create Pages**: Static pages and dynamic routes
6. **Deploy**: Push to Vercel

## Performance Results

The results speak for themselves:
- **First Contentful Paint**: ~0.5s
- **Largest Contentful Paint**: ~0.6s
- **Cumulative Layout Shift**: 0
- **Lighthouse Score**: 100/100/100/100

## Challenges

The main challenge was adjusting my mindset from "React everywhere" to "HTML first, JavaScript when needed." This actually led to simpler, more maintainable code.

## Would I Use It Again?

Absolutely. For content-focused sites, blogs, documentation, and marketing sites, Astro hits the sweet spot of developer experience and performance.

The combination of modern tooling, excellent performance, and the flexibility to add interactivity when needed makes it a compelling choice for many projects.

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)
- [My Site's Source Code](https://github.com/adriantang/site) (coming soon)

