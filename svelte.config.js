import preprocess from 'svelte-preprocess';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import adapter from '@sveltejs/adapter-netlify';

const filePath = dirname(fileURLToPath(import.meta.url))
const sassPath = `${filePath}/src/style/`

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
  preprocess: preprocess({
		scss: {
			prependData: `@import '${sassPath}main.scss';`
		}
	})
};

export default config;
