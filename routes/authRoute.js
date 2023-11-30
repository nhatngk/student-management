const router = require("express").Router();
const { body } = require("express-validator");
const authController = require("../controllers/authController");
const validate = require("../middlewares/validate")


router.post(
    "/login",
    body("username")
        .exists().withMessage("Username is required.")
        .notEmpty().withMessage("Username can't be blank."),
    body("password")
        .exists().withMessage("Password is required.")
        .notEmpty().withMessage("Password can't be blank."),
    validate,
    authController.login);

module.exports = router;