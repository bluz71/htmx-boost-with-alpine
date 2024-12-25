// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpine from '@astrojs/alpinejs';
import htmx from 'astro-htmx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpine(), htmx()]
});
