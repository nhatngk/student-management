const router = require("express").Router();
const studentController = require("../controllers/studentController");

router.get("/:", studentController.getByStudentCode);

router.get("/", studentController.getAllStudent);

router.post("/", studentController.addStudent);

router.put("/", studentController.updateByStudentCode);

router.delete("/", studentController.deleteByStudentCode);

module.exports = router;