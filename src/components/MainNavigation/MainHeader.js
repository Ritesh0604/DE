import React from 'react';
import { useSelector } from 'react-redux'
// import {onLogin} from '../../store/authSlice'
import { NavLink } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = (props) => {
    const checkVal = useSelector(state => state.auth.value)
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="container-fluid ">
                        <h1 className="heading">Vishwakarama Government Engineering College</h1>
                        {!checkVal && <NavLink to="login" > <button className="d-flex btn btn-outline-success" type="submit">Admin Login</button></NavLink>}
                        {checkVal && <NavLink to="form" > <button className="d-flex btn btn-outline-success" type="submit">Add Faculty</button></NavLink>}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
