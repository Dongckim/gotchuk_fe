import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Card from "../components/MainComponents/Card";
import MainHeader from "../components/MainComponents/MainHeader";
import MainStBox from "../components/MainStBox";
import { __getgame } from "../redux/modules/main";
import { getCookie } from "../shared/cookies";

const Main = () => {
  const dispatch = useDispatch();
  const isToken = getCookie('userId')

  useEffect(() => {
    // if(token){
    dispatch(__getgame());
    // }else{
    //   navigate('/login')
    // }
  }, []);

  const { gameList } = useSelector((state) => state.gameList);

  return (
    <>
<<<<<<< HEAD
      <MainHeader/>
      
        {isToken?(
          <Wrapper theme={'login-done'}>
            <MainStBox>
            <div>
              <div key={gameList.id}>
                {gameList.map((item) => {
                  return <Card key={item.id} gameList={item} />;
                })}
              </div>
            </div>
          </MainStBox>
        </Wrapper>
        ): <Wrapper theme={'login'}/>}
    </>
  
=======
      <MainHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "red",
        }}
      >
        <MainStBox>
          <div>
            <div key={gameList.id}>
              {gameList.map((item) => {
                return <Card key={item.id} gameList={item} />;
              })}
            </div>
          </div>
        </MainStBox>
      </div>
    </>
>>>>>>> master
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-size: cover;;
  ${({theme})=>{
    switch(theme){
      case 'login':
        return css`background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://cdn.huffingtonpost.kr/news/photo/202212/205184_313527_2918.jpg");
    `
    case 'login-done':
      return css`
        background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://dispatch.cdnser.be/cms-content/uploads/2022/12/09/1fb0820b-4510-47cc-881c-46942481a540.jpg");
    `
  }
  }}
`