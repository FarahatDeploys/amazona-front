import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessagBox from "../components/MessagBox";

function RegisterScreen() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    if (Password !== confirmPassword) {
      alert("Password doesn't match");
    } else {
      dispatch(register(name, email, Password));
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [userInfo, redirect, history]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler} action="">
        <div>
          <h1>Create Account</h1>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessagBox>{error}</MessagBox>}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Adress</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-Type Your password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account ? <Link to={"/signin"}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
