const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const studentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please Enter First Name"],
  },
  lastname: {
    type: String,
    required: [true, "Please Enter Last Name"],
  },
  mothername: {
    type: String,
    required: [true, "Please Enter Mother Name"],
  },
  fathername: {
    type: String,
    required: [true, "Please Enter Father Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Email Address already taken"],
  },
  dob: {
    type: Date,
    required: [true, "Please Enter DOB"],
  },
  mobilenumber: {
    type: String,
    required: [true, "Please Enter phone number"],
  },
  male: {
    type: String,
  },
  female: {
    type: String,
  },
  address1: {
    type: String,
    required: [true, "Please Enter Address"],
  },
  address2: {
    type: String,
    required: [true, "Please Enter Address"],
  },

  inter: {
    type: String,
    required: [true, "Please Enter 12th percentage"],
  },
  graduation: {
    type: String,
    required: [true, "Please Enter graduation percentage"],
  },
  postgraduation: {
    type: String,
  },
  gpa: {
    type: String,
    required: [true, "Please Enter gpa"],
  },

  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
});

//Job Apply Schema

const jobPostSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please Enter First Name"],
  },
  lastname: {
    type: String,
    required: [true, "Please Enter Last Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
  },
  yop: {
    type: String,
    required: [true, "Please Enter Year Of Passing"],
  },
  gpa: {
    type: Number,
    required: [true, "Please Give GPA/SGPA"],
  },
  mobile: {
    type: Number,
    required: [true, "Please Enter Mobile No"],
  },
  qualification: {
    type: String,
    required: [true, "Please Enter Qualification"],
  },
  experience: {
    type: Number,
    required: [true, "Please Qualification"],
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

module.exports = {
  Student: mongoose.model("Student", studentSchema),
  Apply: mongoose.model("Job_Apply", jobPostSchema),
};
