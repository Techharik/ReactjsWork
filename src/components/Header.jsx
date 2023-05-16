import React from "react";

import { Button } from "reactstrap";
import NavButton from "./Nav";

const Header = () => {
  return (
    <>
      <div className="Hero">
        <NavButton />
        <div className="hero-content">
          <h1>Stylish Portfolio</h1>
          <h3>A Free bootstrap Theme by Start Bootstrap </h3>
          <Button className="btn1" color="danger">
            Find Out More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
