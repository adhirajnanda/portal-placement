import React from "react";
import { useState } from "react";

function Sregistration(props) {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    // console.log(e.target.value, e.target.name);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/students/", {
      method: "POST",

      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert("Account Created Successfully", "Success");
    } else {
      alert("Invalid Credentials", "danger");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper rounded bg-white ms-3 me-3">
        <div className="h2 text-center mt-4 rf">Registration Form</div>

        <div className="form mb-2">
          <h5>Personal Information</h5>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="firstname"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="lastname"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Fathers Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="fathername"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Mothers Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="mothername"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                required
                onChange={handleForm}
                name="email"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>DOB</label>
              <input
                type="date"
                className="form-control"
                required
                onChange={handleForm}
                name="dob"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                required
                onChange={handleForm}
                name="mobilenumber"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Gender</label>
              <div className="d-flex align-items-center mt-2">
                <label className="option">
                  <input type="radio" name="male" onChange={handleForm} />
                  Male
                  <span className="checkmark"></span>
                </label>
                <label className="option ms-4">
                  <input type="radio" name="female" onChange={handleForm} />
                  Female
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <h5 className="mt-4">Address</h5>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Address Line 1</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="address1"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Address Line 2</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="address2"
              />
            </div>
          </div>
          <h5 className="mt-4">Academic Qualifications</h5>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>10th</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="matric"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>12th</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="inter"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Graduation</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="graduation"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Post Graduation</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="postgraduation"
              />
            </div>

            <div class="mb-3">
              <label for="Password" class="form-label">
                Choose Password
              </label>
              <input
                class="form-control"
                type="password"
                id="pwd"
                name="password"
                onChange={handleForm}
              />
            </div>
          </div>

          {/* <div className=" my-md-2 my-3">
            <label>Subject</label>
            <select id="sub" required name="subject">
              <option value="" selected hidden>
                Choose Option
              </option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="Social">Social</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div> */}
          <div>
            <input className="btn btn-primary mt-3" type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Sregistration;
