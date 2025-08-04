import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { ip } from 'address';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: ip()
	}
});
