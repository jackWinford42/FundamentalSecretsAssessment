"use strict";

const express = require("express");
const router = express.Router();

//simple single route for api that returns a new string for the front end.
//input: nothing
//return: { response: "wow that button su    re was clicked"}
router.get("/", async function (req, res, next) {
  try {
    return res.json({ response: "wow that button sure was clicked"});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
