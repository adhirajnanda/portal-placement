const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  loginStud,
  currentStud,
} = require("../controller/studentController");

//Routes for CRUD of Student Registration

router.route("/").get(getStudents);

router.route("/").post(createStudent);

router.route("/:id").get(getStudent);

router.route("/:id").put(updateStudent);

router.route("/:id").delete(deleteStudent);

router.post("/login", loginStud);

router.get("/current", currentStud);

module.exports = router;
