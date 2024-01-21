require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./route/user");

const app = express();
// start

app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.use("/users", userRoute);

// end
app.listen(PORT);