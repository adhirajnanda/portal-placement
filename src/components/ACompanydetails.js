import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ACompanydetails() {
  let navigate = useNavigate();
  const [detail, setDetail] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5001/api/company/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respons = await response.json();
    setDetail(respons);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  //const objectArray = Object.entries(detail);

  // console.log(objectArray);
  console.log(detail);

  return (
    <div>
      <section className="intro">
        <div className="gradient-custom-1 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive bg-white">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">COMPANY</th>
                          <th scope="col">WEBSITE</th>
                          <th scope="col">PHONE</th>
                          <th scope="col">EMAIL</th>
                          <th scope="col">ADDRESS</th>
                        </tr>
                      </thead>
                      {detail.map((company) => (
                        <tbody>
                          <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              {company.companyname}
                            </th>
                            <td>{company.website}</td>
                            <td>{company.mobile}</td>
                            <td>{company.email}</td>

                            <td>{company.address}</td>
                          </tr>
                          {/* <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              Sonya Frost
                            </th>
                            <td>Software Engineer</td>
                            <td>sfrost34@example.com</td>

                            <td>Edinburgh</td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              Jena Gaines
                            </th>
                            <td>Office Manager</td>
                            <td>jgaines75@example.com</td>

                            <td>London</td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              Quinn Flynn
                            </th>
                            <td>Support Lead</td>
                            <td>qflyn09@example.com</td>

                            <td>Edinburgh</td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              Charde Marshall
                            </th>
                            <td>Regional Director</td>
                            <td>cmarshall28@example.com</td>

                            <td>San Francisco</td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              Haley Kennedy
                            </th>
                            <td>Senior Marketing Designer</td>
                            <td>hkennedy63@example.com</td>

                            <td>London</td>
                          </tr>
                          <tr>
                            <th scope="row" style={{ color: "#666666" }}>
                              Tatyana Fitzpatrick
                            </th>
                            <td>Regional Director</td>
                            <td>tfitzpatrick00@example.com</td>

                            <td>Warsaw</td>
                          </tr> */}
                        </tbody>
                      ))}
                    </table>
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

export default ACompanydetails;
