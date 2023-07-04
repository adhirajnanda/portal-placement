import React from "react";
import { useState, useEffect } from "react";

function Sapplied() {
  const [detail, setDetail] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(
      "http://localhost:5001/api/students/jobapply/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const respons = await response.json();
    setDetail(respons);
  };
  useEffect(() => {
    fetchUser();
  }, []);

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
                        <th scope="col">EMAIL</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">STATUS</th>
                      </tr>
                    </thead>
                    {detail.map((student) => (
                      <tbody>
                        <tr>
                          <th scope="row" style={{ color: "#666666" }}>
                            {student.firstname} {student.lastname}
                          </th>
                          <td>{student.email}</td>
                          <td>{student.mobile}</td>
                          <td>Pending</td>
                        </tr>
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

export default Sapplied;
