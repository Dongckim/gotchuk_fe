import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../shared/cookies";

const MainHeader = () => {
  const token = cookies.get("token");
  const navi = useNavigate();

  const delHandler = () => {
    cookies.remove("token");
    cookies.remove("userId");
    navi("/");
    window.location.reload();
  };

  return (
    <STdiv>
      {token ? (
        <>
        <div style={{display:'flex', justifyContent:'space-between', width:'100vw',margin:'50px', paddingTop:'40px', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:'50px'}}>
            <Mdiv onClick={() => navi("/")}>⚽️ GotChuck</Mdiv>
            <Fonta href="https://www.fotmob.com/" target="_blank">
              FotMob
            </Fonta>
            <Fonta href="https://sports.news.naver.com/wfootball/index" target="_blank">
              Naver Sports
            </Fonta>
            <Fonta href="https://www.youtube.com/@leestartv" target="_blank">
              Youtube Estar TV
            </Fonta>
          </div>
          <div style={{ display: "flex", gap: "15px"}}>
            <Fontdiv>{cookies.get("userId")} 님 안녕하세요</Fontdiv>
            <Fontdiv 
              onClick={(e) => {
                delHandler(e);
                navi("/")
              }}
            >
              로그아웃
            </Fontdiv>
          </div>
        </div>
          
        </>
      ) : (
        <div style={{display:'flex', justifyContent:'space-between', width:'100vw',margin:'50px', paddingTop:'40px', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:'50px'}}>
            <Mdiv onClick={() => navi("/")}>⚽️ GotChuck</Mdiv>
            <Fonta href="https://www.fotmob.com/" target="_blank">
              FotMob
            </Fonta>
            <Fonta href="https://sports.news.naver.com/index" target="_blank">
              Naver Sports
            </Fonta>
            <Fonta href="https://www.youtube.com/@leestartv" target="_blank">
              Youtube Estar TV
            </Fonta>
          </div>
          <div style={{ display: "flex", gap: "15px"}}>
            <Fontdiv onClick={() => navi("/login")}>로그인</Fontdiv>
            <Fontdiv onClick={() => navi("/signup")}>회원가입</Fontdiv>
          </div>
        </div>
      )}
    </STdiv>
  );
};

export default MainHeader;

const Wrapper = styled.div`
  padding-left: 30px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;

const STdiv = styled.div`
  font-family: "IBMPlexSansKR-Regular";
  position: fixed;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  gap: 30px;
  color: white;
`;

const Fonta = styled.a`
  font-size: 25px;
  margin-top: 10px;
  text-decoration: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const Fontdiv = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Mdiv = styled.div`
  font-size: 40px;
  font-weight: 600;
  cursor: pointer;
`;
