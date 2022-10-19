import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			configFilePath: join(__dirname, "postcss.config.cjs"),
		},
	}),

	kit: {
		adapter: adapter({
			pages: "../public",
			fallback: "index.html",
		}),
		prerender: { entries: [] },
		trailingSlash: "always",
	},

	vitePlugin: {
		experimental: {
			inspector: true,
		},
	},
};

export default config;
