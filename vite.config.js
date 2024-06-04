import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@import 'src/lib/styles/variables.scss';",
			},
		},
	},
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	plugins: [sveltekit(), imagetools()],
};

export default config;
