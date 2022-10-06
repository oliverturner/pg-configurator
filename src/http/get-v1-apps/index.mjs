import arc from "@architect/functions";

async function getTable() {
  const { data } = await arc.tables();
  const { Items } = await data.scan({
    AttributesToGet: ["label", "dataID"],
  });

  return {
    cors: true,
    json: Items,
  };
}

export const handler = arc.http.async(getTable);
