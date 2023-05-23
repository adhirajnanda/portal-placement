import React from "react";

function Cregistration() {
  return (
    <div className="wrapper rounded bg-white ms-3 me-3">
      <div className="h2 mt-4 text-center">Registration Form</div>
      <div className="h5 mt-4 text-center">
        Employers/Recruiters Registration
      </div>
      div
      <div className="form">
        
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Company Name*</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>CIN/Company Identity Number*</label>
              <input type="text" className="form-control" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Industry Type</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Are You a PCS?*</label>
              <div className="d-flex align-items-center mt-2">
                <label className="option">
                  <input type="checkbox" name="checkbox" />
                  Yes
                  <span className="checkmark"></span>
                </label>
                <label className="option ms-4">
                  <input type="checkbox" name="checkbox" />
                  No
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Listed with recognized Stock exchange?*</label>
              <div className="d-flex align-items-center mt-2">
                <label className="option">
                  <input type="checkbox" name="checkbox" />
                  Yes
                  <span className="checkmark"></span>
                </label>
                <label className="option ms-4">
                  <input type="checkbox" name="checkbox" />
                  No
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="form-group shadow-textarea mt-2">
              <label for="exampleFormControlTextarea6">
                Company/Firm Description
              </label>
              <textarea
                className="form-control z-depth-1"
                id="exampleFormControlTextarea6"
                rows="3"
                placeholder="Company description....."
              ></textarea>
            </div>
          </div>
        </div>
        <div className="main mb-2">
          <div className="h5 mt-4 text-center">Address Details</div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Website</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" required />
            </div>
          </div>

          <div className=" my-md-2 my-3">
            <label>Country</label>
            <select id="sub" required>
              <option value="" selected hidden>
                Choose Option
              </option>
              <option value="India">India</option>
              <option value="Usa">Usa</option>
              <option value="Nepal">Nepal</option>
              <option value="England">England</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>State*</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>City*</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <div className="form-group shadow-textarea">
                <label for="exampleFormControlTextarea6">Address</label>
                <textarea
                  className="form-control z-depth-1"
                  id="exampleFormControlTextarea6"
                  rows="3"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Locality*</label>
              <input type="text" className="form-control" required />
            </div>
          
        </div>
        
          <div className="h5 mt-4 text-center">Contact Details</div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Name (person1)*</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Name (person2)*</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Email (person1)*</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Email (person2)*</label>
              <input type="text" className="form-control" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Mobile (person1)*(OTP will be sent on this number)</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Mobile (person2)*</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <label>Password*</label>
              <input type="password" className="form-control" required />
              <span>(Minimum 5 characters are required)</span>
            </div>
          </div>
          <br />
          <p>
            <b>
              By clicking Complete Registration, you agree to receive SMS
              notification for OTP (one time password) from us.
            </b>{" "}
          </p>

          <div className="text-center">
            <button type="button" className="btn btn-primary mb-3">
              Complete Registration
            </button>
          </div>
        
      </div>
    </div>
  );
}

export default Cregistration;