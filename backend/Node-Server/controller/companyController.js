const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");

//CONTROLLER CONTAINS ALL LOGIC FOR REQ AND RES AND CONNECT TO DB.
//@desc Get all comany
//@route GET /api/company
//access public

const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find();
  res.status(200).json(companies);
});

//@desc Create New company
//@route POST /api/companies
//access public

const createCompany = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    companyname,
    CIN,
    industrytype,
    description,
    website,
    phone,
    country,
    state,
    address,
    name,
    email,
    mobile,
    password,
  } = req.body;
  if (
    !companyname ||
    !CIN ||
    !industrytype ||
    !description ||
    !website ||
    !phone ||
    !country ||
    !state ||
    !address ||
    !name ||
    !email ||
    !mobile ||
    !password
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const companyAvailable = await Company.findOne({ email });
  if (companyAvailable) {
    res.status(400);
    throw new Error("company already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const company = await Company.create({
    companyname,
    CIN,
    industrytype,
    description,
    website,
    phone,
    country,
    state,
    address,
    name,
    email,
    mobile,
    password,

    password: hashedPassword,
  });

  res.status(201).json(company);
});

//@desc Get  company
//@route GET /api/companies/:id
//access public

const getCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    res.status(404);
    throw new Error("Company Not Found");
  }
  res.status(200).json(company);
});

//@desc Update company
//@route PUT /api/companies/:id
//access public

const updateCompany = asyncHandler(async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) {
    res.status(404);
    throw new Error("company Not Found");
  }
  const updatedCompany = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedCompany);
});

//@desc Delete a company
//@route DELETE /api/companies/:id
//access public

const deleteCompany = asyncHandler(async (req, res) => {
  const company = await Company.findByIdAndRemove(req.params.id);
  if (!company) {
    res.status(404);
    throw new Error("company Not Found");
  }

  res.status(200).json(company);
});

//login company
const loginComp = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const company = await Company.findOne({ email });
  if (company && (await bcrypt.compare(password, company.password))) {
    const accessToken = jwt.sign(
      {
        company: {
          email: company.email,
          id: company.id,
          name: company.companyname,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//@desc current user
//@route POST /api/company/current
//access private

const currentComp = asyncHandler(async (req, res) => {
  res.json(req.company);
});

module.exports = {
  getCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
  loginComp,
  currentComp,
};