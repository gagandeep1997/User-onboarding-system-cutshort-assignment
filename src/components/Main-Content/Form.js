import React from "react";
import "./Form.css";
import TextInput from "./TextInput";
import ImageOptions from "./ImageOptions";

const Form = ({ step, stepHandler }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    stepHandler((prev) => {
      return prev + 1;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {(step === 1 || step === 2) && <TextInput step={step} />}
      {step === 3 && <ImageOptions />}
      <div className="d-grid">
        <button className="btn btn-primary mt-3">
          Create Workspace
        </button>
      </div>
    </form>
  );
};

export default Form;
