import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Card() {
  // const navigate = useNavigate();

  return (
    <>
      {/* background to be remove */}
      <div class="p-3 mb-2 bg-gradient-primary text-white">
        .bg-gradient-info
      </div>
      <div className=" d-flex justify-content-around mt-4 ">
        <div className="card text-center mx-2 my-2 " style={{ width: "24rem" }}>
          <img
            src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Admin</h5>

            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>

        <div className="card text-center mx-2 my-2" style={{ width: "24rem" }}>
          <img
            src="https://images.pexels.com/photos/15371598/pexels-photo-15371598/free-photo-of-university-students-in-gowns-after-graduation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Student</h5>

            <a className="btn btn-primary">Login</a>
          </div>
        </div>

        <div className="card text-center mx-2 my-2" style={{ width: "24rem" }}>
          <img
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Company</h5>

            <Link to={"/clogin"} className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
