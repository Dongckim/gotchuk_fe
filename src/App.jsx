import React from "react";
import MainHeader from "./components/MainComponents/MainHeader";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <Router>
        {" "}
        <MainHeader />
      </Router>
    </>
  );
}

export default App;
