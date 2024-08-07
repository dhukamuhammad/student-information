const express = require("express");
const router = express.Router();

const student = require("../controller/Student");
const middleware = require("../controller/Middleware");

router.route("/getstudent").get(student.getstudent);

router.post(
  "/addStudent",
  middleware.uploads.single("profile_pic"),
  student.addStudentData
);

router.delete("/deletestudent/:id", student.deleteStudent);

module.exports = router;
