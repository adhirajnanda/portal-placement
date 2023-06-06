import React from "react";
import { Link } from "react-router-dom";

function ADashboard() {
  return (
    <>
      {/* <div className="mt-4 d-flex justify-content-around mb-4">
        <div className="card row-md-4" style={{ width: "18rem" }}>
          <div className="card-body text-center  row-md-2">Student</div>
        </div>
        <div className="card row-md-4 " style={{ width: "18rem" }}>
          <div className="card-body text-center   ">Company</div>
        </div>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=996&t=st=1685432439~exp=1685433039~hmac=d91368cba828c57764ca688552f209825734c67e09324fca0248d272ca3c8273"
              class="d-block w-100"
              alt="..."
              className="cara"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=996&t=st=1685432439~exp=1685433039~hmac=d91368cba828c57764ca688552f209825734c67e09324fca0248d272ca3c8273"
              class="d-block w-100"
              alt="..."
              className="cara"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=996&t=st=1685432439~exp=1685433039~hmac=d91368cba828c57764ca688552f209825734c67e09324fca0248d272ca3c8273"
              class="d-block w-100"
              alt="..."
              className="cara"
            />
          </div>
        </div>
      </div> */}

      <div className=" d-flex justify-content-around mt-4 ">
        <div className="card text-center mx-2 my-2" style={{ width: "24rem" }}>
          <img
            src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=826&t=st=1685525219~exp=1685525819~hmac=f9da9f1b4294808a988199c72a70864468571396dec5bce54c6c87c57c7d4449"
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Student Details</h5>

            <Link to="/astudentdetails" className="btn btn-primary">
              Go
            </Link>
          </div>
        </div>

        <div className="card text-center mx-2 my-2" style={{ width: "24rem" }}>
          <img
            src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=740&t=st=1685525234~exp=1685525834~hmac=ec989284aaac2f13cc282193beb8bfda50ccaba40c450c6d3573680e7c8895f5"
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Company Details</h5>

            <Link to={"/acompanydetails"} className="btn btn-primary">
              Go
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ADashboard;
