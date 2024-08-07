
/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("../config/routes");
const bodyParser = require('body-parser');

require("dotenv").config();

const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "./views");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text());
// parse application/json
app.use(bodyParser.json())

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Install View Engine */
app.set("views", viewsDir);
app.set("view engine", "ejs");

/** Set Public Directory */
app.use(express.static(publicDir));

/** Install Router */
app.use(router);


module.exports = app;