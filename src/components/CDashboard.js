import React from "react";
import { Link } from "react-router-dom";

function CDashboard() {
  return (
    <>
      {/* Company Details */}

      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col  ">
              <ul className="nav nav-underline bg-light rounded-3 p-3 mb-4">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#">
                    View
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/cjobpost">
                    New Placement Drive
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Sapplied">
                    Student Applied
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link disabled"
                    style={{ color: "green" }}
                  >
                    Approved
                  </Link>
                </li>
              </ul>
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <h4>Company Details</h4>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Company</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Goldman Sachs</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Industry Type</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">IT</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">CIN No.</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">85696-AB-45</p>
                    </div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Website</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        https://www.goldmansachs.com/
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        careersfeedback@ny.email.gs.com
                      </p>
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

              {/* <div className="card mb-4  ">
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
              </div> */}
              {/* <div className="card mb-4  ">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-sm-3">
                      <Link to="/sjobapplied">
                        <p className="mb-0">Job Applied</p>
                      </Link>
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

export default CDashboard;
