import type { PageLoad } from "./$types";

import { dev } from "$app/environment";
import { injectFormats } from "$lib/utils/formats";

export const load: PageLoad = async ({ fetch, params }) => {
	const host = dev ? "http://localhost:3333" : "";
	const url = `${host}/api/v1/apps/${params.dataID}?slots=list`;

	const res = await fetch(url);
	const data = await res.json();

	return {
		appEndpoint: url,
		appConfig: injectFormats(data),
	};
};
