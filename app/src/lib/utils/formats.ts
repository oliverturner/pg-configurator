import type { AppConfig, SlotFormats } from "src/app";

import { RESOLUTION_DICT, FORMAT_DICT } from "$lib/constants/dimensions";

export function injectFormats(data: AppConfig) {
	for (const slot of data.slots) {
		const formats: Record<string, string[]> = {};

		for (const [res, sizes] of slot.sizes) {
			const resLabel = RESOLUTION_DICT[String(res)];
			const formatLabels = sizes.map((size: googletag.GeneralSize) => {
				const format = FORMAT_DICT[String(size)];

				if (!format) {
					console.log(
						"Not found",
						size,
						String(size),
						FORMAT_DICT[String(size)]
					);
				}

				return format;
			});
			formats[resLabel] = formatLabels;
		}

		slot.formats = formats as SlotFormats;
	}

	return data;
}
