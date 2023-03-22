const express = require("express");
const userController = require("./../../controllers/userController.js");
const router = express.Router();

router.route("/random").get(userController.getRandomUser);

router.route("/all").get(userController.getAllUser);

module.exports = router;
