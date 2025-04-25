import React, { useContext } from "react";
import Lottie from "lottie-react";
import registerLottieData from '../../assets/Lottie/register.json'
import AuthContext from "../../context/AuthCOntext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
const Register = () => {
    const {creatiUser} = useContext(AuthContext);
    const handleRegister=(e)=>{
        
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log({email,password})
        // pass validation

        creatiUser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(e=>{
            console.log("ERROR",e.message)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
         <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className= "ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
         <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
