import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userAction";
import LoadingBox from "../Loader/LoadingBox";
import MessageBox from "../Loader/MessageBox";
import { useNavigate } from "react-router-dom";
import "./signin.css";
const SignInScreen = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [history, userInfo]);
  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <div>
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <a href="/register">Create your account</a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignInScreen;
