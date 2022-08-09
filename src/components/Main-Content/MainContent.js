import React, { useState } from "react";
import MainContentHeading from "./MainContentHeading";
import Form from "./Form";
import Congratulation from "./Congratulation";

const MainContent = () => {
  const [step, setstep] = useState(1);

  return (
    <>
      {(step === 1 || step === 2 || step === 3) && (
        <div>
          <MainContentHeading step={step} />
          <Form step={step} stepHandler={setstep} />
        </div>
      )}
      {step === 4 && <Congratulation />}
    </>
  );
};

export default MainContent;
