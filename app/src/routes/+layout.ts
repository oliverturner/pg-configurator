import type { LayoutLoad } from "./$types";

import { dev } from "$app/environment";

export interface App {
  dataID: string;
  label: string;
}

export const load: LayoutLoad = async ({ fetch }) => {
  const host = dev ? "http://localhost:3333" : "";
  const res = await fetch(`${host}/v1/apps`);
  const apps: App[] = await res.json();

  // Wrap `apps` in an object to preserve it as an Array:
  // It'll be converted into an object otherwise
  return { apps };
};
