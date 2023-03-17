import React from "react";
import { Link } from "react-router-dom";
import MainStBox from "../components/MainStBox";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <MainStBox>
        <div>
          메인입니다.!
          <Link to={"/match"}>
            <button>로그인</button>
          </Link>
        </div>
      </MainStBox>
    </div>
  );
};

export default Main;
