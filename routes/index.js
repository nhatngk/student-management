const router = require("express").Router();
const studentRoute = require("./studentRoute")
const authRoute = require("./authRoute")

router.use("/students", studentRoute);
router.use("/auth", authRoute);
router.use("/*", (req, res, next) => {
    next({
        status: 404,
        message: "The route is not found."
    })
})

module.exports = router;