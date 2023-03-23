const express = require("express");
const userController = require("./../../controllers/userController.js");
const router = express.Router();

router.route("/random").get(userController.getRandomUser);

router.route("/all").get(userController.getAllUser);

router.route("/save").post(userController.saveUser);

router.route("/update/:id").patch(userController.updateUser);

router.route("/bulk-update").patch(userController.bulkUpdate);

module.exports = router;
