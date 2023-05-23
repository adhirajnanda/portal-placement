import React from "react";

function Sregistration() {
  return (
    <div>
      <div className="wrapper rounded bg-white ms-3 me-3">
        <div className="h2 text-center mt-4 rf">Registration Form</div>

        <div className="form mb-2">
          <h5>Personal Information</h5>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>First Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Last Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Fathers Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Mothers Name</label>
              <input type="text" className="form-control" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Birthday</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Gender</label>
              <div className="d-flex align-items-center mt-2">
                <label className="option">
                  <input type="radio" name="radio" />
                  Male
                  <span className="checkmark"></span>
                </label>
                <label className="option ms-4">
                  <input type="radio" name="radio" />
                  Female
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <h5 className="mt-4">Address</h5>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Address Line 1</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Address Line 2</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <h5 className="mt-4">Academic Qualifications</h5>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>10th</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>12th</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Graduation</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Post Graduation</label>
              <input type="text" className="form-control" required />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload Your Picture
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>

          <div className=" my-md-2 my-3">
            <label>Subject</label>
            <select id="sub" required>
              <option value="" selected hidden>
                Choose Option
              </option>
              <option value="Maths">Maths</option>
              <option value="Science">Science</option>
              <option value="Social">Social</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="btn btn-primary mt-3">Submit</div>
        </div>
      </div>
    </div>
  );
}

export default Sregistration;
