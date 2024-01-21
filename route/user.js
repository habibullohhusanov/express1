const express = require("express");
const path = require("path");

const router = express.Router();
const app = express();

app.set("views", path.join(__dirname, "views"));

router.get("/", (req, res) => {
    res.render("users", {
        "title": "users",
    });
});
router.get("/create", (req, res) => {
    res.render("add", {
        "title": "User add",
    });
});
router.post("/", (req, res) => {
    res.render("users", {
        "title": "users",
    });
});
router.get("/:id", (req, res) => {
    res.render("user", {
        id: req.params.id
    });
});
router.get("/:id/edit", (req, res) => {
    res.render("add", {
        title: "Edit user",
        id: req.params.id,
    });
});
router.put("/:id", (req, res) => {
    res.render("users");
});
router.delete("/:id", (req, res) => {
    res.render("users");
});

module.exports = router;