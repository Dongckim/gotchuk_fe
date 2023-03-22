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
  const token = getCookie("userId");

  useEffect(() => {
    if (token) {
      dispatch(__getgame());
    }
    // }else{
    //   navigate('/login')
    // }
  }, []);

  const { gameList } = useSelector((state) => state.gameList);
  console.log(gameList);

  return (
    <>
      {token ? (
        <Wrapper theme={'login-done'}>
          <MainHeader />
            <MainStBox>
              <div>
                <div key={gameList.gameId}>
                  {gameList.map((item) => {
                    return <Card key={item.gameId} gameList={item} />;
                  })}
                </div>
              </div>
            </MainStBox>
        </Wrapper>
      ) : (
        <Wrapper theme={'login'}>
          <MainHeader />
          <MainStBox>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center', paddingTop:'200px'}}>
              <MainStr style={{fontSize:'90px'}}>영광의 순간을 지금 바로 함께하세요.</MainStr>
              <MainStr>Communicate the moment of glory with 'Gotchuck' members  </MainStr>
              <MainStr>in real time now! </MainStr>
            </div>
          </MainStBox>
        </Wrapper>
      )}
    </>
  );
};

export default Main;

const MainStr = styled.div`
  /* font-family: 'Helventica'; */
  font-weight: 600;
  font-size: 50px;
  color: #ffffff;
  text-shadow: 8px 8px 10px gray; 
 `

const Wrapper = styled.div`
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  background-size: cover;
  ${({ theme }) => {
    switch (theme) {
      case "login":
        return css`
          height:100vh;
          background-image: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("https://dimg.donga.com/wps/NEWS/IMAGE/2022/12/03/116823334.2.jpg");
        `;
      case "login-done":
        return css`
          height: 100%;
          background-image: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("https://pds.joongang.co.kr/news/FbMetaImage/202211/8eef9124-4d08-4b24-8cf6-40a1fc0ead23.jpg");
        `;
    }
  }}
`;
 