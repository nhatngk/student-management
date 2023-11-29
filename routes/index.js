const router = require("express").Router();
const studentRoute = require("./studentRoute")
const authRoute = require("./authRoute")

router.use("/students", studentRoute);
router.use("/auth", authRoute);

module.exports = router;