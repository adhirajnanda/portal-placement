import React from "react";
import { useState } from "react";

const Sjobapply = () => {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    //console.log(e.target.value, e.target.name);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5001/api/students/jobapply",
      {
        method: "POST",

        body: JSON.stringify(form),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("studentAccessToken")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert(" Successfully Applied", "Success");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <form className="vh-95 gradient-custom" onSubmit={handleSubmit}>
      <div className="container py-5 h-60">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-8 col-lg-7 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-2 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                  Application Form
                </h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="firstname"
                      />
                      <label className="form-label" for="firstName">
                        First Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="lastname"
                      />
                      <label className="form-label" for="lastName">
                        Last Name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="emailAddress"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="email"
                      />
                      <label className="form-label" for="emailAddress">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="yearofpassing"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="yop"
                      />
                      <label className="form-label" for="yearofpassing">
                        Graduation(Year of passing)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="gpa"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="gpa"
                      />
                      <label className="form-label" for="emailAddress">
                        GPA/SGPA
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input
                        type="tel"
                        id="phoneNumber"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="mobile"
                      />
                      <label className="form-label" for="phoneNumber">
                        Phone Number
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <select
                      className="select form-control-lg"
                      onChange={handleForm}
                      name="qualification"
                    >
                      <option value="1"></option>
                      <option value="2">MCA</option>
                      <option value="3">BCA</option>
                      <option value="4">B.Tech</option>
                      <option value="4">B.Sc IT</option>
                    </select>
                    <label className="form-label select-label">
                      Choose Qualification
                    </label>
                  </div>
                  <div className="form-outline mt-4">
                    <input
                      type="text"
                      id="experience"
                      className="form-control form-control-lg"
                      onChange={handleForm}
                      name="experience"
                    />
                    <label className="form-label" for="experience">
                      Experience
                    </label>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <button type="submit" className="btn btn-primary ">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Sjobapply;
