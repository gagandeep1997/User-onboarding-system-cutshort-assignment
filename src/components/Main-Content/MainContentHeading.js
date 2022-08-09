import React from "react";
import './MainContentHeading.css';

const MainContentHeading = ({ step }) => {
  var heading = "Welcome! First things first...";
  var subHeading = "You can always change them later";

  if (step === 2) {
    heading = `Let's set up a home for all your work`;
    subHeading = "You can always create another workspace later";
  }

  if (step === 3) {
    heading = "How are you planning to use Eden?";
    subHeading = `We'll streamline your setup experience accordingly`;
  }

  return (
    <div className="form-headings text-center mt-5">
      <h3>{heading}</h3>
      <p>{subHeading}</p>
    </div>
  );
};

export default MainContentHeading;
