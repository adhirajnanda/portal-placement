import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: form.email,
        password: form.password,
      })
    );

    const response = await fetch("http://localhost:5001/api/students/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.accessToken) {
      alert("Enter Valid Credentials");
    } else {
      localStorage.setItem("studentAccessToken", json.accessToken);
      alert("Login Successfully");
      navigate("/sdashboard");
    }
  };
  const handleForm = (e) => {
    console.log(e.target.value, e.target.name);

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="vh-100 mt-4">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://abcschool.institute.org.in/435abcschool/websites/ofcsch/school-theme-4/assets/images/login-bg.jpg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="form-outline mb-4 mt-5">
                <label className="form-label" for="form3Example3">
                  Email address
                </label>

                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={form.email}
                  onChange={handleForm}
                  name="email"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleForm}
                  name="password"
                />
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
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: 2.5, paddingRight: 2.5 }}
                >
                  Login
                </button>

                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/sregistration" className="link-danger">
                    Register Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Login;
