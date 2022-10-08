import type { LayoutLoad } from "./$types";

import { dev } from "$app/environment";
// import { page } from "$app/stores";

export interface App {
  dataID: string;
  label: string;
}

export const load: LayoutLoad = async ({url, params, fetch}) => {
  const host = dev ? "http://localhost:3333" : "";
  const res = await fetch(`${host}/v1/apps`);
  const apps: App[] = await res.json();
  const currentAppId = params.dataID || apps[0].dataID;
  const currentPath = url.pathname

  // Wrap `apps` in an object to preserve it as an Array:
  // It'll be converted into an object otherwise
  return { apps, currentAppId, currentPath };
};
