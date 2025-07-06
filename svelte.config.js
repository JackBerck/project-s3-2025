import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
	errorHandling: {
		errorPage: '/src/routes/%2Berror.svelte'
	}
};

export default config;
