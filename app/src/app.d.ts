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

type Targeting = Record<string, string>;
type SlotSize = keyof typeof RESOLUTIONS;
type IABFormat = keyof typeof FORMATS;
type SlotFormats = Record<SlotSize, IABFormat[]>;

export interface PageConfig {
  requestMode: "sra" | "lazy";
  targeting: Targeting;
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
export interface AppConfig {
  adunit: string;
  page: PageConfig;
  slots: Record<string, SlotConfig>;
}
