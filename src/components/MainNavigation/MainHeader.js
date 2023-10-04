import React from "react";
import { useSelector } from "react-redux";
// import {onLogin} from '../../store/authSlice'
import { NavLink } from "react-router-dom";
import "./MainHeader.css";
import Button from "../UI/Button/Button";

const MainHeader = (props) => {
  const checkVal = useSelector((state) => state.auth.value);
  return (
    <>
      <header>
        <div className=" header1 p-0 d-flex justify-content-between   ">
        
          <div className=" p-2 d-flex ps-2 ">
            <img
              src="logo.png"
              alt="vishw"
              style={{ height: "100%", width: "7%" }}
            />

          <h3 className="heading p-0 m-0 d-flex align-items-center ps-2 ">
            Vishwakarama Government Engineering College
          </h3>
          </div>
         

          <div className="   d-flex align-items-center absolute ">
            {!checkVal && (
              <NavLink to="login">
                {" "}
                <button
                  className="  py-1  button1 "
                  type="submit"
                >
                  Admin Login
                </button>
               
              </NavLink>
            )}
            {checkVal && (
              <NavLink to="form">
                {" "}
                <button
                  className=" btn button1 btn-outline-success "
                  type="submit"
                >
                  Add Faculty
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
