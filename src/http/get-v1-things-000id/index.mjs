import data from "@begin/data";
import arc from "@architect/functions";

async function handler(request) {
  let thing = await data.get({
    table: "things",
    key: "fiz",
  });
  return {
    ok: true,
    cors: true,
    json: thing?.arbitrary,
  };
}

exports.handler = arc.http.async(handler);
