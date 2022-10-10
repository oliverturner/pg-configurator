import arc from "@architect/functions";

/**
 * @returns { Promise<{ cors: true; json: any[]; }>}
 */
async function getApps() {
	const { data } = await arc.tables();
	const { Items } = await data.scan({
		AttributesToGet: ["label", "dataID"],
	});

	return {
		cors: true,
		json: Items,
	};
}

export const handler = arc.http.async(getApps);
