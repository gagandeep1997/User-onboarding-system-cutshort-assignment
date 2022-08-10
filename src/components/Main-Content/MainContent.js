import React, { useState } from "react";
import MainContentHeading from "./MainContentHeading";
import Form from "../Form/Form";
import Congratulation from "../Congratulation";

const MainContent = () => {
  const [step, setstep] = useState(1);
  const [name, setName] = useState('');

  return (
    <>
      {(step === 1 || step === 2 || step === 3) && (
        <div>
          <MainContentHeading step={step} />
          <Form step={step} stepHandler={setstep} setName={setName} />
        </div>
      )}
      {step === 4 && <Congratulation name={name} />}
    </>
  );
};

export default MainContent;
