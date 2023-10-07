import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";
import { useCookies } from 'react-cookie';
import { useSelector } from "react-redux/es/hooks/useSelector";

const MainHeader = (props) => {
    const [cookies, setCookie] = useCookies(['user']);
    const checkval = useSelector((state) => state.counter.value);
    // let cookie
    // useEffect(() => {
    //     console.log(checkval);
    // },[checkval,cookies.email])
        console.log(cookies.email);
    return (
        <header>
            <div className=" header1 p-0 d-flex justify-content-between   ">

                <div className=" p-2 d-flex ps-2 ">
                    <img
                        src="logo.png"
                        alt="vishwakarma"
                        style={{ height: "100%", width: "7%" }}
                    />

                    <h3 className="heading p-0 m-0 d-flex align-items-center ps-2 ">
                        Vishwakarama Government Engineering College
                    </h3>
                </div>

                <div className="   d-flex align-items-center absolute ">
                    {(!cookies.email && !checkval) && (
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
                    {(cookies.email || checkval) && (
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
