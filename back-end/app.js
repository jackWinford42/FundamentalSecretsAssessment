"use strict";

/** Express app for ramt. */

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const buttonRoute = require("./routes/button")

app.use("/button", buttonRoute);

module.exports = app;
