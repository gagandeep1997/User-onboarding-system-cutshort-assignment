import React, { useState } from "react";
import CustomTextInput from "../Custom-Input/CustomTextInput";
import CustomRadioInput from "../Custom-Input/CustomRadioInput";

const Form = ({ step, stepHandler, setName }) => {
  const [Input1IsValid, setInput1IsValid] = useState(false);
  const [Input2IsValid, setInput2IsValid] = useState(false);
  const [Input1Touched, setInput1Touched] = useState(false);
  const [Input2Touched, setInput2Touched] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (step === 1 || step === 2) {
      if (!Input1IsValid || !Input2IsValid) {
        setInput1Touched(true);
        setInput2Touched(true);
        return;
      }
      setInput1IsValid(false);
      setInput1Touched(false);
      document.getElementsByTagName("input")[0].value = "";
    }
    stepHandler((prev) => {
      return prev + 1;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {(step === 1 || step === 2) && (
        <>
          <CustomTextInput
            labelName={`${step === 1 ? "Full Name" : "Workspace Name"}`}
            placeHolderName={`${step === 1 ? "Steve Jobs" : "Eden"}`}
            InputIsValid={Input1IsValid}
            changeValidInputHandler={setInput1IsValid}
            InputTouched={Input1Touched}
            changeInputTouched={setInput1Touched}
            IsBasicUrl={false}
          />
          {step === 1 ? (
            <CustomTextInput
              labelName="Display Name"
              placeHolderName="Steve"
              InputIsValid={Input2IsValid}
              changeValidInputHandler={setInput2IsValid}
              InputTouched={Input2Touched}
              changeInputTouched={setInput2Touched}
              IsBasicUrl={false}
              setName={setName}
            />
          ) : (
            <CustomTextInput
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
      {step === 3 && <CustomRadioInput />}
      <div className="d-grid">
        <button className="btn btn-primary mt-3">Create Workspace</button>
      </div>
    </form>
  );
};

export default Form;
