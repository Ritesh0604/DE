import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './MainHeader.css';

const MainHeader = (props) => {
    const [cookies, setCookie] = useCookies(['user']);
    return (
        <>
            <header>
                <div className="row bg-primary p-0 d-flex">

                    <div className='col-md-6 col-12 d-flex'>
                        <img src="logo.png" alt="vishwakarma" style={{ height: "90%", width: "20%" }} />
                        <h4 className="heading p-0 m-0 d-flex align-items-center">Vishwakarama Government Engineering College</h4>
                    </div>
                    <div className="col offset-md-4 d-flex align-items-center " >
                        {!cookies.email && <NavLink to="login" > <button className="  btn  btn-outline-success " type="submit">Admin Login</button></NavLink>}
                        {cookies.email && <NavLink to="form" > <button className=" btn btn-outline-success " type="submit">Add Faculty</button></NavLink>}
                    </div>
                </div>

            </header>
        </>
    );
};

export default MainHeader;
