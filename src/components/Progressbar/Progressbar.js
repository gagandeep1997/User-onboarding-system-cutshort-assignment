import React from "react";
import "./Progressbar.css";

const Progressbar = ({ step }) => {
  return (
    <ul id="progressbar">
      <li className="active"></li>
      <li className={`${step >= 2 ? `active` : ``}`}></li>
      <li className={`${step >= 3 ? `active` : ``}`}></li>
      <li className={`${step >= 4 ? `active` : ``}`}></li>
    </ul>
  );
};

export default Progressbar;
