const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { dbConnect } = require("./dbconnection.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const env = {
  port: process.env.PORT,
  dbUrl: process.env.DB_CONNECTION_STRING + process.env.DB_NAME,
};

app.use(bodyParser.json());
app.use(cors());
const main = () => {
  //connect to db
  dbConnect(env.dbUrl);
  //initialize routes
  app.use(require("./routing"));

  app.listen(env.port, () => {
    console.log(`App Started on ${env.port}`);
  });
};

main();

module.exports = { env };
