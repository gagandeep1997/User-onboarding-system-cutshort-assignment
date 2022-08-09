import React from 'react'
import CustomInput from "./CustomInput";

const TextInput = ({step}) => {
  return (
    <>
      <CustomInput
        labelName={`${step === 1 ? "Full Name" : "Workspace Name"}`}
        placeHolderName={`${step === 1 ? "Steve Jobs" : "Eden"}`}
      />
      {step === 1 ? (
        <CustomInput labelName="Display Name" placeHolderName="Steve" />
      ) : (
        <div>
          <label htmlFor="basic-url" className="form-label">
            Workspace URL (optional)
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              www.eden.com/
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Example"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TextInput;
