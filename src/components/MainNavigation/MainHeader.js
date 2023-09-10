import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = (props) => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="container-fluid ">
                        <h1 className="heading">Vishwakarama Government Engineering College</h1>

                       
                        <NavLink to="login" > <button className="d-flex btn btn-outline-success" type="submit">Admin Login</button></NavLink>

                    </div>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
