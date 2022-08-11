import React from "react";
import "./CustomRadioInput.css";

const CustomRadioInput = () => {
  return (
    <div className="grid">
      <label className="card">
        <input name="plan" className="radio" type="radio" defaultChecked />
        <span className="plan-details">
          <i className="fa fa-solid fa-user mb-2 mx-1"></i>
          <p className="first-heading">For myself</p>
          <p className="second-heading">
            Write better. Think more clearly. Stay organized.
          </p>
        </span>
      </label>
      <label className="card">
        <input name="plan" className="radio" type="radio" />
        <span className="plan-details">
          <i className="fa-solid fa-users mb-2"></i>
          <p className="first-heading">With my team</p>
          <p className="second-heading">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </span>
      </label>
    </div>
  );
};

export default CustomRadioInput;
