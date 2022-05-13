const mongoose = require("mongoose");

function dbConnect(dbUrl) {
  mongoose.connect(dbUrl).then(
    (dbo) => {
      console.log("DB connected");
    },
    (err) => {
      console.log("ERROR: Cannot Connect to DB");
    }
  );
}

module.exports = { dbConnect };
