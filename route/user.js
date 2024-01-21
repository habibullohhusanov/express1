const express = require("express");
const controller = require("../controller/userController")

const router = express.Router();

router.get("/", controller.index);
router.get("/create", controller.create);
router.post("/", controller.store);
router.get("/:id", controller.view);
router.get("/:id/edit", controller.edit);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;