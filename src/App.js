import React from "react";
import Header from "./components/Header/Header";
import Progressbar from "./components/Progressbar/Progressbar";
import MainContent from "./components/Main-Content/MainContent";

const App = () => {
  return (
    <div className="container bg-white p-5">
      <div className="row">
        <div className="col-12 col-md-4 offset-md-4">
          <Header />
          <Progressbar />
          <main>
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
