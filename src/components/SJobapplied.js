import React from "react";

function SJobapplied() {
  return (
    <>
      <h2 className="text-center mt-4 ">Applied Job</h2>
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
            <a href="/" className="card-link">
              Apply
            </a>
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
            <h5 className="card-title">Deloitte</h5>
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
            <a href="/" className="card-link disabled">
              Applied
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SJobapplied;
