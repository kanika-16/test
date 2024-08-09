const express = require("express");
const app = express();
require("./database/mongo");
const routes = require("./route");

app.use("v1/", routes);

module.exports = app;
