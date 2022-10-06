const home = require("./__fixtures__/dotcom-home.json");
const article = require("./__fixtures__/dotcom-article.json");
const stream = require("./__fixtures__/dotcom-stream.json");

module.exports = {
  data: [
    {
      scopeID: "2c27fe83-1e6f-4415-9333-2dc60f0e0bed",
      dataID: "ec6fe5a1-5ebf-4d1a-ae01-ff506f9d5dc5",
      label: "dotcom-home",
      ...home,
    },
    {
      scopeID: "2c27fe83-1e6f-4415-9333-2dc60f0e0bed",
      dataID: "aa8dce25-ee59-4b5b-8f6f-ceecba8b226b",
      label: "dotcom-article",
      ...article,
    },
    {
      scopeID: "2c27fe83-1e6f-4415-9333-2dc60f0e0bed",
      dataID: "069c8572-2282-4711-b8e5-f18424193651",
      label: "dotcom-stream",
      ...stream,
    },
  ],
};
