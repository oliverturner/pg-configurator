import type { PageLoad } from "./$types";

import { dev } from "$app/environment";

export const load: PageLoad = async ({ fetch, params }) => {
  const host = dev ? "http://localhost:3333" : "";
  const res = await fetch(`${host}/v1/apps/${params.id}`);
  const data = await res.json();

  // TODO: store slots as a list in DynamoDB
  data.slots = new Map(Object.entries(data.slots || {}));

  return data;
};
