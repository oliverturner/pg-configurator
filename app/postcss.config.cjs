const OpenProps = require("open-props");
const postcssJitProps = require("postcss-jit-props");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	plugins: [
		postcssJitProps(OpenProps),
		postcssPresetEnv({
			stage: 1,
			features: {
				"custom-media-queries": true,
				"nesting-rules": true,
			},
		}),
	],
};
