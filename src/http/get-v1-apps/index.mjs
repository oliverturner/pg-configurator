import arc from "@architect/functions";

async function getTable() {
  let tables = await arc.tables();
  let table = await tables.data.scan({});

  return {
    ok: true,
    cors: true,
    json: table.Items,
  };
}

export const handler = arc.http.async(getTable);
