import React from "react";
import "./Summary.css";

const Summary = ({name}) => {
  return (
    <div className="Summary--heading text-center">
      <span className="dot"><i className="fa fa-check" aria-hidden="true"></i></span>
      <h3>Congratulations, {name}</h3>
      <p>You have completed onboarding, you can start using the Eden!</p>
      <div className="row justify-content-center">
        <div className="col-12">
          <button className="btn btn-primary mt-3">Launch Eden</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
