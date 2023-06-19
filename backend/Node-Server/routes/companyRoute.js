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
} = require("../controller/companyController");
const validateToken = require("../middleware/validateTokenHandler");

//Routes for CRUD of company Registration

router.route("/").get(getCompanies);

router.route("/").post(createCompany);

router.get("/current", validateToken, currentComp);

router.route("/:id").get(getCompany);

router.route("/:id").put(updateCompany);

router.route("/:id").delete(deleteCompany);

router.post("/login", loginComp);

module.exports = router;