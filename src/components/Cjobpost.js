import React from "react";

function Cjobpost() {
  return (
    <div>
      <section className="vh-100 mb-4">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <div
                className="card mt-4 mb-4"
                style={{ borderRadius: "15px", borderColor: "chocolate" }}
              >
                <h3 className="text-black text-center ">Post a Job</h3>
              </div>

              <div className="card " style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Job Title</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Job Description</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea
                        className="form-control "
                        rows="3"
                        placeholder="Detail of Job"
                      ></textarea>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Experience</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value="0">Fresher</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Qualification Required</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <select
                        className="form-select"
                        multiple
                        aria-label="form-label "
                      >
                        <option selected>Select</option>
                        <option value="1">MCA</option>
                        <option value="2">BCA</option>
                        <option value="3">B.Tech</option>
                        <option value="4">B.Sc IT</option>
                        <option value="5">BBA</option>
                        <option value="6">MBA</option>
                      </select>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="px-4 py-4">
                    <button type="submit" className="btn btn-primary ">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cjobpost;
