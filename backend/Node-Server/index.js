const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { default: userEvent } = require("@testing-library/user-event");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
  console.log("Database Connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  fathername: String,
  mothername: String,
  email: String,
  dob: Date,
  mobilenumber: String,
  male: Boolean,
  female: Boolean,
  address1: String,
  address2: String,
  matric: String,
  inter: String,
  graduation: String,
  postgraduation: String,
  profilepic: Buffer,
  password: String,
});

const Student = mongoose.model("Student", studentSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.put("/test", async (req, res) => {
  let student = new Student();
  student.firstname = req.body.firstname;
  student.lastname = req.body.lastname;
  student.fathername = req.body.fathername;
  student.mothername = req.body.mothername;
  student.email = req.body.email;
  student.dob = req.body.dob;
  student.mobilenumber = req.body.mobilenumber;
  student.male = req.body.male;
  student.female = req.body.female;
  student.address1 = req.body.address1;
  student.address2 = req.body.address2;
  student.matric = req.body.matric;
  student.inter = req.body.inter;
  student.graduation = req.body.graduation;
  student.postgraduation = req.body.postgraduation;
  student.profilepic = req.body.profilepic;
  student.password = req.body.password;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});

server.listen(8080, () => {
  console.log("server started");
});
