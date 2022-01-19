import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddEmployee = () => {
  let history = useHistory();
  const [employee, setEmployee] = useState({
    nameEmplyee: "",
    Photo: "", 
    jobTitle:"",
    cellPhone:"+84",
    email:"", 
    
  });

  const { nameEmplyee,Photo,jobTitle,cellPhone,email } = employee;
  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://nws-management.herokuapp.com/employee", employee);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name employee"
              name="nameEmployee"
              value={nameEmplyee}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type=""
              className="form-control form-control-lg"
              placeholder="Enter Photo"
              name="photo"
              value={Photo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter jobtitle"
              name="jobTitle"
              value={jobTitle}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter cellphone"
              name="cellPhone"
              value={cellPhone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;