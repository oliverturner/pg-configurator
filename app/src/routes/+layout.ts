import type { LayoutLoad } from "./$types";

import { dev } from "$app/environment";
import type { AppLink } from "src/app";

export const load: LayoutLoad = async ({ url, params, fetch }) => {
	const host = dev ? "http://localhost:3333" : "";
	const res = await fetch(`${host}/api/v1/apps`);
	const apps: AppLink[] = await res.json();

	const currentAppId = params.dataID;
	const currentPath = url.pathname;

	return { apps, currentAppId, currentPath };
};
