import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cookies } from "../../shared/cookies";

const MainHeader = () => {
<<<<<<< HEAD
    const navigate = useNavigate();
    return (
        <STdiv>
            <Wrapper>
                <div style={{display:'flex', alignItems:'center', gap:'50px'}}>
                    <Mdiv onClick={()=>{navigate('/')}}>
                        <div> ⚽️ </div>
                        <div>GotChuck</div>
                    </Mdiv>
                    <Fontdiv>FotMob</Fontdiv>
                    <Fontdiv>Naver Sports</Fontdiv>
                    <Fontdiv>Youtube E-Star TV</Fontdiv>  
                </div>
                <div style={{display:'flex', gap:'20px'}}>
                    <Fontdiv onClick={()=>{navigate('/login')}}>
                        Login
                    </Fontdiv>
                    <Fontdiv onClick={()=>{navigate('/signup')}}>
                        Signup
                    </Fontdiv>
                </div>
            </Wrapper>
        </STdiv>
            
            
    )
}
=======
  const token = cookies.get("token");
  const navi = useNavigate();
  const delHandler = () => {
    cookies.remove("token");
    cookies.remove("userId");
    navi("/");
  };

  return (
    <STdiv>
      {token ? (
        <>
          <Mdiv onClick={() => navi("/")}>⚽️ GotChuck</Mdiv>
          <Fontdiv>FotMob</Fontdiv>
          <Fontdiv>Naver Sports</Fontdiv>
          <Fontdiv>Youtube Estar TV</Fontdiv>
          <div style={{ display: "flex", gap: "15px" }}>
            <Fontdiv>{cookies.get("userId")} 님 안녕하세요</Fontdiv>
            <Fontdiv
              onClick={(e) => {
                delHandler(e);
              }}
            >
              로그아웃
            </Fontdiv>
          </div>
        </>
      ) : (
        <>
          <Mdiv onClick={() => navi("/")}>⚽️ GotChuck</Mdiv>
          <Fontdiv>FotMob</Fontdiv>
          <Fontdiv>Naver Sports</Fontdiv>
          <Fontdiv>Youtube Estar TV</Fontdiv>
          <div style={{ display: "flex", gap: "15px" }}>
            <Fontdiv onClick={() => navi("/login")}>로그인</Fontdiv>
            <Fontdiv onClick={() => navi("/signup")}>회원가입</Fontdiv>
          </div>
        </>
      )}
    </STdiv>
  );
};
>>>>>>> master

export default MainHeader;

const Wrapper = styled.div`
    padding-left: 30px;
    padding-right: 40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100vw;
`

const STdiv = styled.div`
<<<<<<< HEAD
    font-family: 'IBMPlexSansKR-Regular';
    position: fixed;
    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    color: #ffffff;
`
const Fontdiv = styled.div`
    font-size: 25px;
    cursor: pointer;
`

const Mdiv = styled.div`
    display: flex;
    gap: 15px;
    font-size: 40px;
    font-weight: 600;
    cursor: pointer;
    align-items: center;
`   
=======
  font-family: "IBMPlexSansKR-Regular";
  position: fixed;
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-left: 50px;
  gap: 30px;
  color: white;
`;
const Fontdiv = styled.div`
  font-size: 25px;
  margin-top: 10px;
`;

const Mdiv = styled.div`
  font-size: 40px;
  font-weight: 600;
  padding-right: 30px;
`;
>>>>>>> master
