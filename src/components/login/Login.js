import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


export default function Login() {
  const history = useHistory()
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { username, password } = values;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const response = await axios.post(`https://nws-management.herokuapp.com/auth/login`, { username, password });
      if (response.data.statusCode !== 404) {

        localStorage.setItem(
          "admin",
          JSON.stringify(response.data.accessToken)
        );
          history.push('/')
      } else {
        console.error("Account not found");
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <div className="container wrapper">
      <div className="col-10 col-lg-5">
        <form onSubmit={handleSubmitForm}>
          <h1  className="text-center">Login - Admin</h1>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              className="form-control"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
