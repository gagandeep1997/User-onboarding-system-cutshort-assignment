import React from "react";
import "./Header.css";
import img from "../../Images/logo.png";

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
