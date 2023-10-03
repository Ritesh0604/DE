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
                <div className="row header1 p-0 d-flex">
                    
                        <div className='col-md-6 col-12 d-flex'>
                            <img src = "logo.png" alt="vishw"  style={{height:"80%",width:"20%"}}/>
                              <h4 className="heading p-0 m-0 d-flex align-items-center">Vishwakarama Government Engineering College</h4>
                             
                        </div>

                        <div className="col offset-md-4 d-flex align-items-center " >
                        {!checkVal && <NavLink to="login" > <button className="  btn button1 btn-outline-success " type="submit">Admin Login</button></NavLink>}
                        {checkVal && <NavLink to="form" > <button className=" btn button1 btn-outline-success " type="submit">Add Faculty</button></NavLink>}
                        </div>
                </div>
             
            </header>
        </>
    );
};

export default MainHeader;
