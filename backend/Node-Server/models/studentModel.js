const mongoose = require("mongoose");

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
  matric: {
    type: String,
    required: [true, "Please Enter 10th percentage"],
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

  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
