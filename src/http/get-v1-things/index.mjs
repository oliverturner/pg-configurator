const data = require("@begin/data");
const arc = require("@architect/functions");

async function handler() {
  const things = await data.get({
    table: "things",
  });
  return {
    statusCode: 200,
    cors: true,
    json: things,
  };
}

exports.handler = arc.http.async(handler);
