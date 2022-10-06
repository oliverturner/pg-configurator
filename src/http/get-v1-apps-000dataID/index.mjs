import arc from "@architect/functions";

const scopeID = "2c27fe83-1e6f-4415-9333-2dc60f0e0bed";
const regExp = new RegExp(/^[a-zA-Z0-9-]{36}$/);

function validateParams({ dataID }) {
  return dataID.match(regExp);
}

async function getTable(request) {
  const { dataID } = validateParams(request.params);

  if (dataID === false) {
    throw new Error("Invalid dataID");
  }

  const tables = await arc.tables();
  const json = await tables.data.get({ scopeID, dataID });

  return {
    ok: true,
    cors: true,
    json,
  };
}

export const handler = arc.http.async(getTable);
