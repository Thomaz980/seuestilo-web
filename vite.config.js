import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve('./src/lib/components'),
			$lib: path.resolve('./src/lib'),
			$src: path.resolve('./src'),
			$public: path.resolve('./public'),
			$img: path.resolve('./public/images')
		}
	},
	server: {
		fs: {
			allow: ['public']
		},
		watch: {
			usePolling: true,
			interval: 100
		}
	},
	optimizeDeps: {
		include: ['svelte', '@sveltejs/kit']
	}
});
