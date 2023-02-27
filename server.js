// require express server
const express = require("express");
// require dotenv
const dotenv = require("dotenv");
// require morgan
const morgan = require("morgan");
// require body-parser
const bodyParser = require("body-parser");
// require path
const path = require("path");
// require mongoDB connection file
const connectDB = require("./server/model/connection");
// use express server as constant named app
const app = express();
// config file path for environment and credentials
dotenv.config({ path: "config.env" });
const port = process.env.PORT || 8080;
var cors = require('cors');
app.use(cors());
// log request in console
app.use(morgan("tiny"));
// mongoDB connction
connectDB();
// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// set HTML engine
app.set("view engine", "ejs");
// set HTML to not default path
// app.set("views", path.resolve(--dirname, "views/ejs"));

// load assets images , js files, css files
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
// load router
app.use("/", require("./server/routes/router"));
app.listen(port, () => {
  console.log(`Express server is running on : http://localhost:${port}`);
});
