import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    matricNumber: "",
    password: "",
    password2: "",
    email: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Register submitted:", userData);
    // 🔥 Normally you'd call backend API here
    // On success, redirect to verify-otp
    navigate("/verify-otp", { state: { email: userData.email } });
  };

  return (
    <section className="register">
      <div className="register_container">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <p className="form_error-message">Any error from the backend</p>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={changeInputHandler}
            autoComplete="true"
            autoFocus
          />
          <input
            type="text"
            name="matricNumber"
            placeholder="Matriculation Number"
            onChange={changeInputHandler}
            autoComplete="true"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeInputHandler}
            autoComplete="true"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={changeInputHandler}
            autoComplete="true"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={changeInputHandler}
            autoComplete="true"
          />
          <p>
            Already registered? <Link to="/">Sign In</Link>
          </p>
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
