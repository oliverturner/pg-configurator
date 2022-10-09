// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { FORMATS, RESOLUTIONS } from "$lib/constants/dimensions";

// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
  // interface Session {}
  // interface Stuff {}
}

type SlotSize = keyof typeof RESOLUTIONS;
type IABFormat = keyof typeof FORMATS;
type SlotFormats = Record<SlotSize, IABFormat[]>;

export interface PageConfig {
  requestMode: "sra" | "lazy";
  lazyLoad: {
    fetchMarginPercent: number;
    renderMarginPercent: number;
    mobileScaling: number;
  };
}
export interface SlotConfig {
  formats: SlotFormats;
  targeting: Targeting;
  sizes: googletag.GeneralSize[];
}

export interface AppLink {
  dataID: string;
  label: string;
}

export interface AppConfig {
  page: PageConfig;
  slots: Record<string, SlotConfig>;
}
