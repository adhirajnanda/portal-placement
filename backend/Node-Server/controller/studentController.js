const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { Student, Apply } = require("../models/studentModel");
const { Job } = require("../models/companyModel");
const jwt = require("jsonwebtoken");
// const Stud = require("../models/studentModel");

//CONTROLLER CONTAINS ALL LOGIC FOR REQ AND RES AND CONNECT TO DB.
//@desc Get all student
//@route GET /api/students
//access public

const getStudents = asyncHandler(async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
});

//@desc Create New student
//@route POST /api/students
//access public

const createStudent = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    firstname,
    lastname,
    mothername,
    fathername,
    email,
    dob,
    mobilenumber,
    male,
    address1,
    address2,
    inter,
    postgraduation,
    gpa,
    graduation,

    password,
  } = req.body;
  if (
    !firstname ||
    !lastname ||
    !mothername ||
    !fathername ||
    !email ||
    !dob ||
    !mobilenumber ||
    !male ||
    !address1 ||
    !address2 ||
    !inter ||
    !postgraduation ||
    !graduation ||
    !gpa ||
    !password
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const studentAvailable = await Student.findOne({ email });
  if (studentAvailable) {
    res.status(400);
    throw new Error("Student already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const student = await Student.create({
    firstname,
    lastname,
    mothername,
    fathername,
    email,
    dob,
    mobilenumber,
    male,
    address1,
    address2,
    inter,
    graduation,
    postgraduation,
    gpa,

    password: hashedPassword,
  });

  res.status(201).json(student);
});

//@desc Get  student
//@route GET /api/students/:id
//access public

const getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student Not Found");
  }
  res.status(200).json(student);
});

//@desc Update student
//@route PUT /api/students/:id
//access public

const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student Not Found");
  }
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedStudent);
});

//@desc Delete a student
//@route DELETE /api/students/:id
//access public

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("Student Not Found");
  }

  res.status(200).json(student);
});

//login student
const loginStud = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const student = await Student.findOne({ email });
  if (student && (await bcrypt.compare(password, student.password))) {
    const accessToken = jwt.sign(
      {
        student: {
          email: student.email,
          id: student.id,
          name: student.firstname + " " + student.lastname,
        },
      },
      process.env.ACCESS_TOKEN_SECRET
      // { expiresIn: "5m" }
    );

    res.status(200).json({ accessToken });
  } else if (!student) {
    success = false;
    return res
      .status(400)
      .json({ error: "Please login with right credentials" });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

//@desc current user
//@route POST /api/students/current
//access private

const currStud = asyncHandler(async (req, res) => {
  try {
    studId = req.student.id;
    const stud = await Student.findById(studId).select("-password");
    res.send(stud);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server ERROR");
  }
});

//JOB APPLY

const studentApply = asyncHandler(async (req, res) => {
  try {
    const { companyId } = req.body;

    const apply = await Apply.create({
      studentId: req.student.id,
      companyId,
    });

    res.status(201).json(apply);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
  // console.log(req.student);
});

//getting all job posted list

const getJobApply = asyncHandler(async (req, res) => {
  const jobsApply = await Apply.find();
  res.status(200).json(jobsApply);
});

const getJob = asyncHandler(async (req, res) => {
  //fetch student id
  console.log(req.student);
  let id = req.student.id;

  // fetch marks and course from student data
  const student = await Student.findOne({ _id: id });

  // console.log(student);
  //fetch active job from jobs table
  const jobs = await Job.aggregate([
    {
      $match: {
        $or: [{ gpa: { $gte: 7 } }],
      },
    },
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "company",
      },
    },
  ]);

  // const jobs = await JobApply.aggregate([
  //   {
  //     $match: {
  //       $or: [{ companyId: req.company.id }],
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: "students",
  //       localField: "studentId",
  //       foreignField: "_id",
  //       as: "student",
  //     },
  //   },
  // ]);

  console.log(jobs);

  res.status(200).json(jobs);
});

module.exports = {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  loginStud,
  currStud,
  studentApply,
  getJobApply,
  getJob,
};
