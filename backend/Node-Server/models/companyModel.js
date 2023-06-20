const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  companyname: {
    type: String,
    required: [true, "Please Enter Company Name"],
  },
  CIN: {
    type: String,
    required: [true, "Please Enter CIN No"],
  },
  industrytype: {
    type: String,
    required: [true, "Please Enter Industry type"],
  },
  description: {
    type: String,
    required: [true, "Please Enter description"],
  },
  website: {
    type: String,
    required: [true, "Please website Email"],
  },
  phone: {
    type: String,
    required: [true, "Please Enter Phone no."],
  },
  country: {
    type: String,
    required: [true, "Please Enter Country Name"],
  },
  state: {
    type: String,
    required: [true, "Please Enter State Name"],
  },

  address: {
    type: String,
    required: [true, "Please Enter Address"],
  },
  name: {
    type: String,
    required: [true, "Please Enter Address"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Email Address already taken"],
  },
  mobile: {
    type: String,
    required: [true, "mobile"],
  },

  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
});

//Job Schema

const jobSchema = mongoose.Schema({
  jobtitle: {
    type: String,
    required: [true, "Please Enter Job Title"],
  },
  jobdescription: {
    type: String,
    required: [true, "Please Enter Job Description"],
  },
  experience: {
    type: String,
    required: [true, "Please Enter Experience"],
  },
  qualification: {
    type: String,
    required: [true, "Please Qualification"],
  },
  gpa: {
    type: Number,
    required: [true, "Please Qualification"],
  },
});

module.exports = {
  Company: mongoose.model("Company", companySchema),
  Job: mongoose.model("Job", jobSchema),
};
