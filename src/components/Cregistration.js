import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cregistration() {
  let navigate = useNavigate();

  const [form, setForm] = useState({});

  const handleForm = (e) => {
    //console.log(e.target.value, e.target.name);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/company/", {
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
      navigate("/clogin");
    } else {
      alert("Invalid Credentials", "danger");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper rounded bg-white ms-3 me-3">
        <div className="h2 mt-4 text-center rf">Registration Form</div>
        <div className="h5 mt-4 text-center">
          Employers/Recruiters Registration
        </div>

        <div className="form">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Company Name*</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="companyname"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>CIN/Company Identity Number*</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="CIN"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Industry Type</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="industrytype"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group shadow-textarea mt-2">
              <label for="exampleFormControlTextarea6">
                Company/Firm Description
              </label>
              <textarea
                className="form-control z-depth-1"
                id="exampleFormControlTextarea6"
                rows="3"
                placeholder="Company description....."
                onChange={handleForm}
                name="description"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="main mb-2">
          <div className="h5 mt-4 text-center">Address Details</div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Website</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="website"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                required
                onChange={handleForm}
                name="phone"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Country*</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="country"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>State*</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="state"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <div className="form-group shadow-textarea">
                <label for="exampleFormControlTextarea6">Address</label>
                <textarea
                  className="form-control z-depth-1"
                  id="exampleFormControlTextarea"
                  rows="3"
                  placeholder="Address"
                  onChange={handleForm}
                  name="address"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="h5 mt-4 text-center">Contact Details</div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Name </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="name"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Email </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Mobile </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleForm}
                name="mobile"
              />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                required
                onChange={handleForm}
                name="password"
              />
              <span>(Minimum 5 characters are required)</span>
            </div>
          </div>

          <div>
            <input className="btn btn-primary mt-3" type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Cregistration;
