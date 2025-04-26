import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthCOntext/AuthContext";
import jobIcon from '../../assets/Icons/favIcon48.png'

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((res) => {
        console.log("Succesfull Sign Out");
      })
      .catch((e) => {
        console.log("faild to sign out", e.message);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/myapplications">My Applications</Link>
      </li>
      <li>
      <Link to="/addjob">Add Job</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
            <img src={jobIcon} alt="" />
            <h3>Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="register">Register</Link>
            <Link to="/signin">
              <button className="btn">Sign In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
