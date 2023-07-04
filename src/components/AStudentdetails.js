import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AStudentdetails() {
  let navigate = useNavigate();

  const [detail, setDetail] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("http://localhost:5001/api/students/", {
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

  const id = detail.map((sId) => sId._id);
  console.log(id);

  const deleteStudent = async (studentId) => {
    await fetch("http://localhost:5001/api/students/" + studentId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  //const objectArray = Object.entries(detail);

  // console.log(objectArray);
  console.log(detail);

  return (
    <section className="intro mt-4 mb-4">
      <div className="gradient-custom-1 h-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="table-responsive bg-white">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">MOBILE</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">ADDRESS</th>
                        <th scope="col">STATUS</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    {detail.map((student) => (
                      <tbody>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            {student.firstname} {student.lastname}
                          </th>
                          <td>{student.mobilenumber}</td>
                          <td>{student.email}</td>
                          <td>{student.address1}</td>
                          <td>$320,800</td>
                          <td>
                            <ul class="list-inline m-0">
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-success btn-sm rounded-4"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                              </li>
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-danger btn-sm rounded-4"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                  onClick={() => deleteStudent(student._id)}
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        {/* <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            Sonya Frost
                          </th>
                          <td>BCA</td>
                          <td>sfrost34@example.com</td>
                          <td>Edinburgh</td>
                          <td>$103,600</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            Jena Gaines
                          </th>
                          <td>MCA</td>
                          <td>jgaines75@example.com</td>
                          <td>London</td>
                          <td>$90,560</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            Quinn Flynn
                          </th>
                          <td>MCA</td>
                          <td>qflyn09@example.com</td>
                          <td>Edinburgh</td>
                          <td>$342,000</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            Charde Marshall
                          </th>
                          <td>B.TECH</td>
                          <td>cmarshall28@example.com</td>
                          <td>San Francisco</td>
                          <td>$470,600</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            Haley Kennedy
                          </th>
                          <td>MBA</td>
                          <td>hkennedy63@example.com</td>
                          <td>London</td>
                          <td>$313,500</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            Tatyana Fitzpatrick
                          </th>
                          <td>MBA</td>
                          <td>tfitzpatrick00@example.com</td>
                          <td>Warsaw</td>
                          <td>$385,750</td>
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
  );
}

export default AStudentdetails;
