const express = require("express");

require("colors");
require("dotenv").config();
const app = express();
const Router = require('./routers/user.router')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',Router)

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running on port : http://localhost:${PORT}`.bold.blue)
);
