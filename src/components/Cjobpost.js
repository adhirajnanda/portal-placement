import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cjobpost() {
  let navigate = useNavigate();

  const [form, setForm] = useState({});

  const handleForm = (e) => {
    //console.log(e.target.value, e.target.name);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/company/job", {
      method: "POST",

      body: JSON.stringify(form),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("companyAccessToken")}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert("Job Posted Successfully", "Success");
      navigate("/cjobpost");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <section className="vh-90 ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div
                className="card mt-4 mb-4"
                style={{ borderRadius: "15px", borderColor: "chocolate" }}
              >
                <h3 className="text-black text-center ">Post a Job</h3>
              </div>

              <div className="card " style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Job Title</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="jobtitle"
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Job Description</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea
                        className="form-control "
                        rows="3"
                        placeholder="Detail of Job"
                        onChange={handleForm}
                        name="jobdescription"
                      ></textarea>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Experience</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={handleForm}
                        name="experience"
                      >
                        <option selected>Select</option>
                        <option value="0">Fresher</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Qualification Required</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <select
                        className="form-select"
                        aria-label="form-label "
                        onChange={handleForm}
                        name="qualification"
                      >
                        <option selected>Select</option>
                        <option value="1">MCA</option>
                        <option value="2">BCA</option>
                        <option value="3">B.Tech</option>
                        <option value="4">B.Sc IT</option>
                        <option value="5">BBA</option>
                        <option value="6">MBA</option>
                      </select>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">GPA (Min. Required)</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        onChange={handleForm}
                        name="gpa"
                      />
                    </div>
                  </div>

                  <div className="px-4 py-4">
                    <button type="submit" className="btn btn-primary ">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Cjobpost;
