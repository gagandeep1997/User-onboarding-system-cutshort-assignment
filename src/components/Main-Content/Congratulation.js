import React from "react";
import "./Congratulation.css";

const Congratulation = () => {
  return (
    <div className="Congratulation--heading text-center">
      <h3>Congratulation, Eren</h3>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <div className="d-grid">
        <button className="btn btn-primary mt-3">Lauch Eden</button>
      </div>
    </div>
  );
};

export default Congratulation;
