import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SDashboard() {
  let navigate = useNavigate();
  const [job, setJob] = useState([]);
  const fetchJob = async () => {
    const jresponse = await fetch(
      "http://localhost:5001/api/students/get-job",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("studentAccessToken")}`,
        },
      }
    );

    const jrespons = await jresponse.json();
    console.log(jrespons);
    setJob(jrespons);
  };
  useEffect(() => {
    fetchJob();
  }, []);

  console.log(job);

  const [detail, setDetail] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5001/api/students/current", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("studentAccessToken")}`,
      },
    });

    const respons = await response.json();
    setDetail(respons);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("/slogin");
    }
    fetchUser();
  }, []);

  //const objectArray = Object.entries(detail);

  // console.log(objectArray);
  console.log(detail);

  return (
    <>
      <h1 className="text-center mt-4 ">Latest Jobs</h1>

      <div className="ms-3 me-3 mt-4 mb-4 d-flex justify-content-around">
        {job.map((jobs) => (
          <div className="card mx-2 " style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Accenture</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {jobs.jobtitle}
              </h6>
              <p className="card-text">{jobs.jobdescription}</p>
              <a href="/" className="card-link">
                More Details
              </a>
              <Link to="/sjobapply" className="card-link">
                Apply
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Student Details */}
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <h4>My Profile</h4>
              </nav>
            </div>
          </div>

          <div className="row">
            {[detail].map((student) => (
              <div className="col-lg-8 mx-auto col-10 col-md-8 col-lg-6">
                <div className="card mb-4">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {student.firstname} {student.lastname}
                        </p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{student.email}</p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5678</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {student.mobilenumber}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {student.address1} {student.address2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}

                <div className="card mb-4  ">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">DOB :</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{student.dob}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Intermediate(%)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{student.inter}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Graduation(%)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{student.graduation}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Post Graduation(%)</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {student.postgraduation}{" "}
                        </p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">GPA</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{student.gpa}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 ">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-sm-3">
                        <Link to="/sjobapplied">
                          <p className="mb-0">Job Applied</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SDashboard;
