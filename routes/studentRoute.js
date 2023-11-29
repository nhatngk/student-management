const router = require("express").Router();

const verifyToken = require("../middlewares/verify");

const studentController = require("../controllers/studentController");

router.get("/:", studentController.getByStudentCode);

router.get("/", studentController.getAllStudent);

router.post("/", verifyToken, studentController.addStudent);

router.put("/", verifyToken, studentController.updateByStudentCode);

router.delete("/", verifyToken, studentController.deleteByStudentCode);

module.exports = router;