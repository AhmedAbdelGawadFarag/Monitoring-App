const express = require("express");

const router = express.Router();

const controller = require("../controllers/User");

router.get("/", controller.getUser);

router.post("/", controller.createUser);

module.exports = router;
