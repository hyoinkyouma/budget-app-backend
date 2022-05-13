const { saveToMongo } = require("./utilSaveToMongo");

const responseSave = (title, price) => {
  saveToMongo(title, price);
  console.log("Saved to mongo");
};

module.exports = { responseSave };
