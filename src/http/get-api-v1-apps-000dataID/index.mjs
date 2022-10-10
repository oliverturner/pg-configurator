/**
 * @typedef {import("@architect/functions/types/http").HttpRequest} HttpRequest
 */

import arc from "@architect/functions";

import { validateUuid } from "@architect/shared/validate.mjs";
import { DYNAMO_DB } from "@architect/shared/constants.mjs";

/**
 * @param {HttpRequest} request
 * @returns {Promise<{
 *   ok: boolean;
 *   cors: true;
 *   json: any;
 * }>}
 */
async function getApp(request) {
	const dataID = validateUuid(request.pathParameters.dataID);
	const { scopeID } = DYNAMO_DB;

	const tables = await arc.tables();
	const json = await tables.data.get({ scopeID, dataID });

	return {
		ok: true,
		cors: true,
		json,
	};
}

export const handler = arc.http.async(getApp);
