import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [department, setDepartment] = useState([]);
  const token = JSON.parse(localStorage.getItem("admin"));
  useEffect(() => {
    loadDepartment();
  }, []);

  const loadDepartment = async () => {
    const result = await axios.get("https://nws-management.herokuapp.com/department",{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setDepartment(result.data.reverse());
  };

  const deleteDepartment = async id => {
    await axios.delete(`/${id}`);
    loadDepartment();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">DEPARTMENT</h1>
        <Link  to={`/department/${department}`} className="d-flex justify-content-end">
        <button className="btn btn-primary mb-3">Add department</button>
      </Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">nameDepartment</th>
              <th scope="col">officePhone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {department.map((department, index) => (
              <tr>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{department.id}</td>
                <td>{department.nameDepartment}</td>
                <td>{department.officePhone}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/department/${department.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/department/${department.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteDepartment(department.id)}
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

export default Home;