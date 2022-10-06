import type { LayoutLoad } from "./$types";

import { dev } from "$app/environment";

export const load: LayoutLoad = async ({ fetch }) => {
  const host = dev ? "http://localhost:3333" : "";
  const res = await fetch(`${host}/v1/apps`);
  const data = await res.json();

  return data;
}
