import React, { useState } from "react";
import CustomInput from "../Input/CustomInput";
import ImageOptions from "../Main-Content/ImageOptions";

const Form = ({ step, stepHandler }) => {
  const [Input1IsValid, setInput1IsValid] = useState(false);
  const [Input2IsValid, setInput2IsValid] = useState(false);
  const [Input1Touched, setInput1Touched] = useState(false);
  const [Input2Touched, setInput2Touched] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Input1IsValid, Input2IsValid);
    if (!Input1IsValid || !Input2IsValid) {
      setInput1Touched(true);
      setInput2Touched(true);
      return;
    }
    document.getElementsByTagName('input')[0].value="";
    stepHandler((prev) => {
      return prev + 1;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {(step === 1 || step === 2) && (
        <>
          <CustomInput
            labelName={`${step === 1 ? "Full Name" : "Workspace Name"}`}
            placeHolderName={`${step === 1 ? "Steve Jobs" : "Eden"}`}
            InputIsValid={Input1IsValid}
            changeValidInputHandler={setInput1IsValid}
            InputTouched={Input1Touched}
            changeInputTouched={setInput1Touched}
            IsBasicUrl={false}
          />
          {step === 1 ? (
            <CustomInput
              labelName="Display Name"
              placeHolderName="Steve"
              InputIsValid={Input2IsValid}
              changeValidInputHandler={setInput2IsValid}
              InputTouched={Input2Touched}
              changeInputTouched={setInput2Touched}
              IsBasicUrl={false}
            />
          ) : (
            <CustomInput
              labelName="Workspace URL"
              placeHolderName=""
              InputIsValid={Input2IsValid}
              changeValidInputHandler={setInput2IsValid}
              InputTouched={Input2Touched}
              changeInputTouched={setInput2Touched}
              IsBasicUrl={true}
            />
          )}
        </>
      )}
      {step === 3 && <ImageOptions />}
      <div className="d-grid">
        <button className="btn btn-primary mt-3">Create Workspace</button>
      </div>
    </form>
  );
};

export default Form;
