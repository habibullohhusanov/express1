const pool = require("../config/db");


const index = async (req, res) => {
    try {
        let users = await pool.query("SELECT * FROM users");
        res.render("users/users", {
            users: users.rows,
        });
    } catch (e) {
        res.render("error_pages/error", {
            error: e
        })
    }
}
const create = (req, res) => {
    try {
        res.render("users/add", {
            "title": "User add",
        });
    } catch(e) {
        res.render("error_pages/error", {
            error: e
        });
    }
}
const store = async (req, res) => {
    try {
        await pool.query(`INSERT INTO users (username, password, age) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.age}')`)
        res.redirect("/users");
    } catch(e) {
        res.render("error_pages/error", {
            error: e
        });
    }
}
const view = async (req, res) => {
    try {
        let user = await pool.query(`SELECT * FROM users WHERE id=${req.params.id} `)
        res.render("users/user", {
            user: user,
        });
    } catch(e) {
        res.render("error_pages/error", {
            error: e
        });
    }
}
const edit = async (req, res) => {
    try {
        let user = await pool.query(`SELECT * FROM users WHERE id=${req.params.id} `)
        res.render("users/edit", {
            user: user.rows[0],
        });
    } catch(e) {
        res.render("error_pages/error", {
            error: e
        });
    }
}
const update = async (req, res) => {
    try {
        let user = await pool.query(`UPDATE users SET username='${req.body.username}', password='${req.body.password}', age=${req.body.age} WHERE id=${req.params.id}`)
        res.redirect("/users");
    } catch(e) {
        res.render("error_pages/error", {
            error: e
        });
    }
}
const destroy = async (req, res) => {
    try {
        let user = await pool.query(`DELETE FROM users WHERE id=${req.params.id}`)
        res.redirect("/users");
    } catch(e) {
        res.render("error_pages/error", {
            error: e
        });
    }
}

module.exports = {
    index,
    create,
    store,
    view,
    edit,
    update,
    destroy,
}