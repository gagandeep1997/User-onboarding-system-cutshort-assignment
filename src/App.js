import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Main-Content/MainContent";

const App = () => {
  return (
    <div className="container p-3 p-md-5">
      <div className="row">
        <div className="col-12 col-md-12">
          <Header />
          <main>
            <MainContent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
