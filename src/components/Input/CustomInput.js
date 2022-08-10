import React, { useRef } from "react";
import "./CustomInput.css";

const CustomInput = ({
  labelName,
  placeHolderName,
  InputIsValid,
  changeValidInputHandler,
  InputTouched,
  changeInputTouched,
  IsBasicUrl,
  setName
}) => {
  const textRef = useRef();

  const textChangeHandler = () => {
    if (textRef.current.value.trim() === "") {
      changeValidInputHandler(false);
    } else {
      changeValidInputHandler(true);
      if(labelName==="Display Name"){
        setName(textRef.current.value);
      }
    }
    changeInputTouched(true);
  };

  const blurHandler = () => {
    changeInputTouched(true);
  };

  const IsTextValidClass = !InputIsValid && InputTouched ? "Form Invalid" : "";

  return (
    <div className={`${IsTextValidClass} mb-2`}>
      <label htmlFor="text">
        {labelName}
        {IsBasicUrl && <span> (optional)</span>}
      </label>
      {!IsBasicUrl && (
        <input
          type="text"
          placeholder={placeHolderName}
          onChange={textChangeHandler}
          ref={textRef}
          onBlur={blurHandler}
        />
      )}
      {!InputIsValid && InputTouched && (
        <p className="error-text">Field must not be empty</p>
      )}
      {/* This Field is optional so we dont need to add validation for that */}
      {IsBasicUrl && (
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
      )}
    </div>
  );
};

export default CustomInput;
