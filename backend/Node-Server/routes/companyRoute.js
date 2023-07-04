const express = require("express");
const router = express.Router();
const {
  getCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  loginComp,
  currentComp,
  createJob,
  getJob,
} = require("../controller/companyController");
const validateToken = require("../middleware/validateTokenHandler");

//Routes for of company all features

router.route("/").get(getCompanies);

router.route("/").post(createCompany);

router.get("/current", validateToken, currentComp);

//get posted job list
router.get("/job/", getJob);

router.route("/:id").get(getCompany);

router.route("/:id").put(updateCompany);

router.route("/:id").delete(deleteCompany);

router.post("/login", loginComp);

//get posted job list

//job create by company

router.post("/job", validateToken, createJob);

module.exports = router;
