import React from "react";
import "./Header.css";
import img from "../Images/Screenshot 2022-08-09 at 11.41.09 AM.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={img} alt="abc" className="header-logo" />
        <h1 className="heading">Eden</h1>
      </div>
    </div>
  );
};

export default Header;
