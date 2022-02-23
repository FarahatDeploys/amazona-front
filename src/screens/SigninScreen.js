import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessagBox from "../components/MessagBox";

function SigninScreen() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, Password));
  };
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignin;
  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [userInfo, redirect, history]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler} action="">
        <div>
          <h1>Sign In</h1>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessagBox>{error}</MessagBox>}
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
          <label htmlFor="" />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New Customer ?<Link to={`/register`}>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
