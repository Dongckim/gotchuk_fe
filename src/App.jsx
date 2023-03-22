import React from "react";
import FooterBox from "./components/MainComponents/FooterBox";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <Router />
      <FooterBox>
        <div>
          프론트엔드:김동찬,김지호
          <br />
          백엔드:이민재,김재승,김동영,이산하
        </div>
      </FooterBox>
    </>
  );
}

export default App;
