import React from "react";
import adminPhoto from "../img/adminPhoto.avif";
import studentPhoto from "../img/studentPhoto.jpeg";

import companyPhoto from "../img/companyPhoto.jpeg";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";   

function Card() {
  // const navigate = useNavigate();

  return (
    <>

      {/* background to be remove */}  

      <div class="p-3 mb-0 bg-gradient-primary text-white">
     
        .bg-gradient-info
  </div>
      <div className=" d-flex justify-content-around mt-0 background">
      
        <div className="card text-center mx-2 my-2 " style={{ width: "24rem" }}>
          <img
            src={adminPhoto}
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }} 
          />
          <div className="card-body">
            <h5 className="card-title">Admin</h5>

            <Link to="/alogin" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>

        <div className="card text-center mx-2 my-2" style={{ width: "24rem" }}>
          <img
            src={studentPhoto}
            className="card-img-top"
            alt="..."
            style={{ height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Student</h5>

            <Link to="/slogin" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>

        <div className="card text-center mx-2 my-2" style={{ width: "24rem" }}>
          <img
            src={companyPhoto}
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
