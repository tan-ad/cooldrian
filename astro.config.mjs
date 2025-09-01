// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: 'https://tanad.me',
    integrations: [mdx(), sitemap()],
    markdown: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex]
    },
    vite: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },

      plugins: [tailwindcss()],
    },
});
