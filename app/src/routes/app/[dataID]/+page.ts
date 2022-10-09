import type { PageLoad } from "./$types";

import { dev } from "$app/environment";
import { RESOLUTION_DICT, FORMAT_DICT } from "$lib/constants/dimensions";

console.log({ FORMAT_DICT });

function injectFormats(data: any) {
  for (const slot of data.slots) {
    const formats: Record<string, string[]> = {};

    for (const [res, sizes] of slot.sizes) {
      const resLabel = RESOLUTION_DICT[String(res)];
      const formatLabels = sizes.map((size: any) => {
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

    slot.formats = formats;
  }
}

export const load: PageLoad = async ({ fetch, params }) => {
  const host = dev ? "http://localhost:3333" : "";
  const url = `${host}/v1/apps/${params.dataID}`;

  console.log({ url });

  const res = await fetch(url);
  const data = await res.json();

  injectFormats(data);

  return data;
};
