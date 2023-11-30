const router = require("express").Router();
const { body, param } = require("express-validator");
const verifyToken = require("../middlewares/verify");
const studentController = require("../controllers/studentController");
const validate = require("../middlewares/validate")


router.get(
    "/:studentCode",
    studentController.getByStudentCode
);

router.get("/", studentController.getAllStudent);

router.post(
    "/:studentCode",
    body("fullName")
        .exists().withMessage("Full name is required.")
        .notEmpty().withMessage("Full name can't be blank."),
    body("birthday")
        .exists().withMessage("Birthday is required.")
        .notEmpty().withMessage("Birthday can't be blank.")
        .isDate().withMessage("Birthday is invalid."),
    body("gender")
        .exists().withMessage("Gender is required.")
        .notEmpty().withMessage("Gender can't be blank.")
        .isBoolean().withMessage("Gender must be boolean type."),
    body("classCode")
        .exists().withMessage("Class code is required.")
        .notEmpty().withMessage("Class code can't be blank."),
    validate,
    verifyToken,
    studentController.addStudent);

router.put(
    "/:studentCode",
    body("fullName")
        .exists().withMessage("Full name is required.")
        .notEmpty().withMessage("Full name can't be blank."),
    body("birthday")
        .exists().withMessage("Birthday is required.")
        .notEmpty().withMessage("Birthday can't be blank.")
        .isDate().withMessage("Birthday is invalid."),
    body("gender")
        .exists().withMessage("Gender is required.")
        .notEmpty().withMessage("Gender can't be blank.")
        .isBoolean().withMessage("Gender must be boolean type."),
    body("classCode")
        .exists().withMessage("Class code is required.")
        .notEmpty().withMessage("Class code can't be blank."),
    validate,
    verifyToken,
    studentController.updateByStudentCode);

router.delete("/:studentCode", verifyToken, studentController.deleteByStudentCode);

module.exports = router;