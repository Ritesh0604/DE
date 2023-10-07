import React from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";
import Button from "../UI/Button/Button";
import { useCookies } from 'react-cookie';

const MainHeader = (props) => {
    const [cookies, setCookie] = useCookies(['user']);

    return (
        <header>
            <div className=" header1 p-0 d-flex justify-content-evenly   ">

                <div className="  d-flex headpart ">
                    <img
                        src="logo.png"
                        alt="vishwakarma"
                        style={{ height: "100%", width: "7%" }}
                    />

                    <h3 className=" p-2 align-items-center head ">
                        Vishwakarama Government Engineering College
                    </h3>
                </div>

                <div className=" align-items-center  ">
                    {!cookies.email && (
                        <NavLink to="login">
                            <div
                                className="  py-1 admin "
                                type="submit"
                            >
                                Admin Login
                            </div>

                        </NavLink>
                    )}
                    {cookies.email && (
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
    );
};

export default MainHeader;
