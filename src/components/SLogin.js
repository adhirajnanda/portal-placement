import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className="vh-100 mt-4">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
<<<<<<<< HEAD:src/components/CLogin.js
                

                <div className="form-outline mb-4 mt-5">
                <label className="form-label" for="form3Example3">
                    Email address
                  </label>
========
<<<<<<< HEAD:src/components/SLogin.js
                <div className="form-outline mb-4 mt-5">
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
=======
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
>>>>>>> a4cf82cc763e1aec0c0d95cb0c689c1bcdff0796:src/components/Login.js
>>>>>>>> 6096f3c77a9b2b9526c6eb6dfc3e1726ef64f7a0:src/components/SLogin.js
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
<<<<<<<< HEAD:src/components/CLogin.js
                 
                </div>

                <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
========
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">
>>>>>>>> 6096f3c77a9b2b9526c6eb6dfc3e1726ef64f7a0:src/components/SLogin.js
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
<<<<<<<< HEAD:src/components/CLogin.js
                  
========
>>>>>>>> 6096f3c77a9b2b9526c6eb6dfc3e1726ef64f7a0:src/components/SLogin.js
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: 2.5, paddingRight: 2.5 }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
<<<<<<<< HEAD:src/components/CLogin.js
                 
                    <Link to="/cregistration" className="link-danger">
              Register Here
            </Link>
========
                    <Link to="/sregistration" className="link-danger">
                      Register Here
                    </Link>
>>>>>>>> 6096f3c77a9b2b9526c6eb6dfc3e1726ef64f7a0:src/components/SLogin.js
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
