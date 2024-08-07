const express = require("express");
const router = express.Router();

const CourseDetails = require("../controller/CourseDetails");

router.get("/getCourseDetails", CourseDetails.getCourseDetails)

module.exports = router;
