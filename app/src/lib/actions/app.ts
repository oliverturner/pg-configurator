import type { ActionResult } from "@sveltejs/kit";
import type {
	AppConfig,
	PageConfig,
	PageRequestMode,
	PageLoadConfig,
} from "src/app";

import { invalidateAll } from "$app/navigation";
import { applyAction } from "$app/forms";

export function parseFormData(form: HTMLFormElement): PageConfig {
	const formData = new FormData(form);
	const sraEnabled = formData.get("requestMode") === "on";

	const pageDict = {
		requestMode: sraEnabled ? "sra" : ("lazy" as PageRequestMode),
		lazyLoad: {} as PageLoadConfig,
	};
	const lazyloadKeys = [
		"fetchMarginPercent",
		"renderMarginPercent",
		"mobileScaling",
	] as Array<keyof PageLoadConfig>;
	for (const key of lazyloadKeys) {
		pageDict.lazyLoad[key] = Number(formData.get(key));
	}

	return pageDict;
}

export function pageChangeHandler({
	appConfig,
	appEndpoint,
}: {
	appConfig: AppConfig;
	appEndpoint: string;
}) {
	return async function onPageChange(this: HTMLFormElement) {
		const page = parseFormData(this);
		const payload = { ...appConfig, page };

		const response = await fetch(appEndpoint, {
			method: "PUT",
			body: JSON.stringify(payload),
		});

		const result: ActionResult = await response.json();

		if (result.type === "success") {
			// re-run all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	};
}
