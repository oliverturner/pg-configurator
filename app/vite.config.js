import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		host: "local.ft.com",
		port: 8081,
	},
};

export default config;
