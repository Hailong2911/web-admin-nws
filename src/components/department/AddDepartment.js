import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddDepartment = () => {
  let history = useHistory();
  const [department, setDepartment] = useState({
    id: "",
    nameDepartment: "",
    officePhone: "",  
    
  });

  const { id,nameDepartment,officePhone } = department;
  const onInputChange = e => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://nws-management.herokuapp.com/department", department);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Department</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter ID"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="nameDepartment"
              value={nameDepartment}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="officePhone"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="officePhone"
              value={officePhone}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          <button className="btn btn-primary btn-block">Add Department</button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;