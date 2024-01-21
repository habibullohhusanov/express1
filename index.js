require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./route/user");
const methodOverride = require('method-override');

const app = express();
// start

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");

app.use("/users", userRoute);
app.use((req, res) => {
    res.status(404).end("404");
});

// end
app.listen(PORT, () => console.log(`${URL}:${PORT}`));