import React from "react";
import { Link } from "react-router-dom";

function SDashboard() {
  return (
    <>
      <h1 className="text-center mt-4 ">Latest Jobs</h1>
      <div className="ms-3 me-3 mt-4 mb-4 d-flex justify-content-around">
        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Accenture</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              QA Engineer
            </h6>
            <p className="card-text">
              A full time job and candidate must have having 3+ years of
              experience in webtechnologies
            </p>
            <a href="/" className="card-link">
              More Details
            </a>
            <Link to="/sjobapply" className="card-link">
              Apply
            </Link>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">CodeBucket</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Frontend Developer
            </h6>
            <p className="card-text">
              A full time job and candidate must have having 3+ years of
              experience in webtechnologies
            </p>
            <a href="/" className="card-link">
              More Details
            </a>
            <a href="/" className="card-link">
              Apply
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Capegimini</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Backend Developer
            </h6>
            <p className="card-text">
              A full time job and candidate must have having 3+ years of
              experience in webtechnologies
            </p>
            <a href="/" className="card-link">
              More Details
            </a>
            <a href="/" className="card-link">
              Apply
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Delloite</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Associate Developer
            </h6>
            <p className="card-text">
              A full time job and candidate must have having 3+ years of
              experience in webtechnologies
            </p>
            <a href="/" className="card-link">
              More Details
            </a>
            <a href="/" className="card-link">
              Apply
            </a>
          </div>
        </div>
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
            
          
            <div className="col-lg-8 mx-auto col-10 col-md-8 col-lg-6">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
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
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
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
                      <p className="text-muted mb-0">00-00-0000</p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">10th</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">12th</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">UG</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">PG</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
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

              {/* <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div
                        className="progress rounded"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: "5px" }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SDashboard;
