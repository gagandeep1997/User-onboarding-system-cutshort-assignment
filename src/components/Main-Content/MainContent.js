import React, { useState } from "react";
import MainContentHeading from "./MainContentHeading";
import Form from "../Form/Form";
import Progressbar from "../Progressbar/Progressbar";
import Summary from "../Summary/Summary";

const MainContent = () => {
  const [step, setstep] = useState(1);
  const [name, setName] = useState("");

  return (
    <>
    <Progressbar step={step} />
      {(step === 1 || step === 2 || step === 3) && (
        <div>
          <MainContentHeading step={step} />
          <div className="row gx-5 justify-content-center">
            <div className="col-12 col-md-4">
              <Form step={step} stepHandler={setstep} setName={setName} />
            </div>
          </div>
        </div>
      )}
      {step === 4 && <Summary name={name} />}
    </>
  );
};

export default MainContent;
