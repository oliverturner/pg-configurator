import { invertObject } from "$lib/utils/data";

export const RESOLUTIONS = {
	extra: [1200, 800],
	large: [1024, 768],
	medium: [768, 690],
	small: [320, 50],
	default: [0, 0],
} as const;

/**
 * By convention we use IAB Ad Format names when configuring slots
 */
export const FORMATS = {
	OneByOne: [1, 1],
	Responsive: [2, 2],
	MicroBar: [88, 31],
	Button2: [120, 60],
	WideSkyscraper: [160, 600],
	Rectangle: [180, 50],
	MediumRectangle: [300, 250],
	HalfPage: [300, 600],
	Portrait: [300, 1050],
	AdhesionBanner: [320, 50],
	Leaderboard: [728, 90],
	SuperLeaderboard: [
		[970, 90],
		[970, 66],
	],
	Billboard: [970, 250],
	PartnerContent: "fluid",
	hidden: "",
} as const;

// Derived values
//------------------------------------------------------------------------------
// Invert RESOLUTIONS to get a map of resolutions to names
export const RESOLUTION_DICT = invertObject(RESOLUTIONS);

// Invert FORMATS to get a map of formats to names
export const FORMAT_DICT = invertObject(FORMATS);
