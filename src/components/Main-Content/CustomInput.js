import React from "react";

const CustomInput = ({ labelName, placeHolderName }) => {

  return (
    <div>
      <label htmlFor="text">{labelName}</label>
      <input type="text" placeholder={placeHolderName} />
    </div>
  );
};

export default CustomInput;
