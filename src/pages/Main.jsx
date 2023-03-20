import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/MainComponents/Card";
import MainHeader from "../components/MainComponents/MainHeader";
import MainStBox from "../components/MainStBox";
import { __getgame } from "../redux/modules/main";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // if(token){
    dispatch(__getgame());
    // }else{
    //   navigate('/login')
    // }
  }, []);

  const { gameList } = useSelector((state) => state.gameList);

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
          <header>
            <Link to={"/login"}>
              <button>로그인</button>
            </Link>
          </header>
          <div key={gameList.id}>
            {gameList.map((item) => {
              return <Card key={item.id} gameList={item} />;
            })}
          </div>
        </div>
      </MainStBox>
    </div>
  );
};

export default Main;
