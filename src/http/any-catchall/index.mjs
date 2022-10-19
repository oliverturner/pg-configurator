import asap from "@architect/asap";

export async function handler(req) {
	return asap({ spa: true })(req);
}
