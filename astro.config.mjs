import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yuanmao1.github.io',
  vite: { plugins: [tailwindcss()] },
});
