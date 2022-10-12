// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { FORMATS, RESOLUTIONS } from "$lib/constants/dimensions";

// and what to do when importing types
declare namespace App {
	interface Locals {
		appConfig: AppConfig;
		appEndpoint: string;
	}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	// interface Session {}
	// interface Stuff {}
}

type SlotSize = keyof typeof RESOLUTIONS;
type IABFormat = keyof typeof FORMATS;
type SlotFormats = Record<SlotSize, IABFormat[]>;

export type PageRequestMode = "sra" | "lazy";
export type PageLoadConfig = {
	fetchMarginPercent: number;
	renderMarginPercent: number;
	mobileScaling: number;
};

export interface PageConfig {
	requestMode: PageRequestMode;
	lazyLoad: PageLoadConfig;
}

export interface SlotConfigRaw {
	id: string;
	targeting: Targeting;
	sizes: [[number, number], googletag.GeneralSize[]][];
}
export interface SlotConfig extends SlotConfigRaw {
	formats: SlotFormats;
}

export interface AppLink {
	dataID: string;
	label: string;
}

export interface AppConfig {
	scopeID: string;
	dataID: string;
	label: string;
	page: PageConfig;
	slots: SlotConfig[];
}
