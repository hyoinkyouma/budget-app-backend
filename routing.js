const express = require("express");
const router = express.Router();

const { responseSave } = require("./services");

router.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  responseSave(name, price);
});

module.exports = router;
