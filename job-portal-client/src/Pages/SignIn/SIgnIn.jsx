import Lottie from "lottie-react";
import React, { useContext } from "react";
import axios from 'axios';
import loginLottieData from "../../assets/Lottie/login2.json";
import AuthContext from "../../context/AuthCOntext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const SIgnIn = () => {
  const { signInuser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('sign in',location)
  const from = location?.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    signInuser(email, password)
      .then((res) => {
        console.log("signIn", res.user.email);
        const user = { email: res.user.email };
        axios.post("http://localhost:5000/jwt", user,{withCredentials: true})
        .then((res) =>console.log(res.data));
        // navigate(from)
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
