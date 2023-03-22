const express = require("express");
const userController = require("./../../controllers/userController.js");
const router = express.Router();

router.route("/random").get(userController.getRandomUser);

module.exports = router;
