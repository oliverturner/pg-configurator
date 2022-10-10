const shared = require("../.eslintrc.json");

module.exports = {
	...shared,
	root: true,
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["filename-rules", "@typescript-eslint", "svelte3"],
	ignorePatterns: ["*.cjs"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"filename-rules/match": [2, /^\+?([a-z]+-?)*(\.server)?\.\w+/],
	},
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
};
