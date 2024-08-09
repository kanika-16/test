const router = require("express").Router();
const userController = require("./userController");

router.post("/add", userController.createUser);

module.exports = router;
