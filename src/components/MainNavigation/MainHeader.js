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
       // console.log(cookies.email);
    return (
        <header className="fixed-top">
            <div className=" header1 p-0 d-flex  px-3  ">

                <div className="  d-flex headpart ">
                    <img
                        src="logo.png"
                        alt="vishwakarma"
                        style={{ height: "40%", width: "10%" }}
                    />

                    <div className=" p-1 align-items-center head ">
                       <h3> Vishwakarama Government Engineering College</h3>
                       <p>Chandkheda, Gujarat</p>
                    </div>
                </div>

                <div className="   d-flex align-items-center absolute ">
                    {(!cookies.email && !checkval) && (
                        <NavLink to="login">
                            <div
                                className="  py-1 admin "
                                type="submit"
                            >
                                Admin Login
                            </div>

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
