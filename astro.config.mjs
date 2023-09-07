import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://freedom-ukraine.netlify.app',
	integrations: [mdx(), sitemap()],
	vite: {
		server: {
			watch: {
			ignored: [
				'**/.idea/**',
			]}
		}
	}
});
