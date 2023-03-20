import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __loginUser } from "../redux/modules/login";
import MainHeader from "../components/MainComponents/MainHeader";

const LoginStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://image.fmkorea.com/files/attach/new3/20230126/33854530/5287715641/5433174744/59540154ce0e1cdb159d0c4af2089f1b.jpg");
  background-size: cover;
`;

const LoginBox = styled.form`
  width: 300px; /*박스의 가로 크기*/
  height: 300px; /*박스의 세로 크기*/
  position: absolute; /*박스의 위치를 설정하기 위해 position 속성을 사용합니다*/
  top: 50%; /*화면의 세로 중앙*/
  left: 50%; /*화면의 가로 중앙*/
  transform: translate(-50%, -50%); /*위치를 조정합니다.*/
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const BoxStyle = styled.div`
  padding-bottom: 30px;
`;

const InputStyle = styled.input`
  border-radius: 5px;
  width: 200px;
  height: 40px;
`;

const ButtonStyle = styled.button`
  margin: 20px;
  width: 100px;
  border-radius: 5px;
  background-color: pink;
  :hover {
    background-color: #f37287;
    cursor: pointer;
  }
`;

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const { isLogin } = useSelector((state) => state.users);

  useEffect(() => {
    if (isLogin) {
      navigate("/login");
    }

    return () => {
      // second
    };
  }, []);

  return (
    <>
      <MainHeader />
      <LoginStyle>
        <LoginBox
          onSubmit={(e) => {
            e.preventDefault();
            dispacth(__loginUser(user));
            navigate("/");
          }}
        >
          <h2>GotChuck</h2>

          <BoxStyle>
            <label>아이디 : </label>
            <InputStyle
              type="text"
              value={user.username}
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="아이디를 입력해주세요"
            />
          </BoxStyle>
          <BoxStyle>
            <label>비밀번호 : </label>
            <InputStyle
              type="password"
              value={user.password}
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="비밀번호를 입력해주세요"
            />
          </BoxStyle>
          <div>
            <ButtonStyle>로그인</ButtonStyle>
            <Link to="/signup">
              <ButtonStyle>회원가입</ButtonStyle>
            </Link>
          </div>
        </LoginBox>
      </LoginStyle>
    </>
  );
}

export default Login;
