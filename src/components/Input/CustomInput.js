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
}) => {
  const textRef = useRef();

  const textChangeHandler = () => {
    if (textRef.current.value.trim() === "") {
      changeValidInputHandler(false);
    } else {
      changeValidInputHandler(true);
    }
    changeInputTouched(true);
  };

  const blurHandler = () => {
    changeInputTouched(true);
  };

  const IsTextValidClass = !InputIsValid && InputTouched
    ? "Form Invalid"
    : "";

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
            onChange={textChangeHandler}
            ref={textRef}
            onBlur={blurHandler}
          />
        </div>
      )}
      {!InputIsValid && InputTouched && <p className="error-text">Field must not be empty</p>}
    </div>
  );
};

export default CustomInput;
