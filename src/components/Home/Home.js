import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Card className="home">
        <img src="/sitemap.jpg" width="70%" height="70%"></img>

        <div className="content">
          <p>
            Welcome to our website.Here you will be helped with navigation of
            faculty.
          </p>
          <div className="forButton">
          <NavLink to="navigate">  
            <button className="d-flex btn btn-outline-success search" type="submit">
              Search
            </button>
          </NavLink>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Home;
