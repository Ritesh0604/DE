import React from 'react';
import { NavLink } from 'react-router-dom';
//import Navigation from './Navigation';
import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <>
      

        { /*
      <nav>
      <div className={classes.container}>
        
           
              <h1>Vishwakarama Government Engineering College</h1>
         
           
              <button className={classes.button} >block </button>
           
        
        </div>
  </nav>*/}
   <header>
        <nav className="navbar">
          <div className="container-fluid ">
            <h1 className="heading">Vishwakarama Government Engineering College</h1>

           <NavLink to="navigate" > <button className="d-flex btn btn-outline-success" type="submit">Search</button></NavLink>

          </div>
        </nav>
        </header>
      </>
      );
};

      export default MainHeader;
