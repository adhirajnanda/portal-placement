const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  currStud,
  loginStud,
} = require("../controller/studentController");
const validateToken = require("../middleware/validateTokenHandler");

//Routes for CRUD of Student Registration

router.route("/").get(getStudents);

router.route("/").post(createStudent);

router.get("/current", validateToken, currStud);

router.route("/:id").get(getStudent);

router.route("/:id").put(updateStudent);

router.route("/:id").delete(deleteStudent);

router.post("/login", loginStud);

module.exports = router;
