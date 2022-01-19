import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../services/api/ApiEmployee";







export default function Employee  () {
  const [department, setEmployee] = useState([]);
  const token = JSON.parse(localStorage.getItem("admin"));
  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("https://nws-management.herokuapp.com/employee",{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setEmployee(result.data.reverse());
  };

  const deleteEmployee = async id => {
    await axios.delete(`/${id}`);
    loadEmployee();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2 className="text-center">EMPLOYEE</h2>
        <Link to="/admin/employee/add" className="d-flex justify-content-end">
        <button className="btn btn-primary mb-3">+Add Employee</button>
      </Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">name employee</th>
              <th scope="col">Photo</th>
              <th scope="col">Job title</th>
              <th scope="col">Cellphone</th>
              <th scope="col">email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {department.map((employee, index) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.nameEmployee}</td>
                <td>
                <img style={{width: "150px", height: "150px"}}
                src={employee.photo.replace(
                    `uploads`,
                    "https://nws-management.herokuapp.com/"
                  )} alt="photo"/>
                </td>
                <td>{employee.jobTitle}</td>
                <td>{employee.cellPhone}</td>
                <td>{employee.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/employee/${employee.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/employee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

