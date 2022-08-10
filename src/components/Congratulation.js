import React from "react";
import "./Congratulation.css";

const Congratulation = ({name}) => {
  return (
    <div className="Congratulation--heading text-center">
      <h3>Congratulation, {name}</h3>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <div className="d-grid">
        <button className="btn btn-primary mt-3">Launch Eden</button>
      </div>
    </div>
  );
};

export default Congratulation;
