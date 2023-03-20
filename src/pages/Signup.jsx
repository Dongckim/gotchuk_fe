import React, { useState } from "react";
import styled from "styled-components";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainComponents/MainHeader";

const SignStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/27/370ffdcc-a6e1-4b93-8677-3148c1746119.jpg");
  background-size: cover;
  background-position: center center;
`;

const SignBox = styled.form`
  width: 350px; /*박스의 가로 크기*/
  height: 370px; /*박스의 세로 크기*/
  position: absolute; /*박스의 위치를 설정하기 위해 position 속성을 사용합니다*/
  top: 50%; /*화면의 세로 중앙*/
  left: 50%; /*화면의 가로 중앙*/
  transform: translate(-50%, -50%); /*위치를 조정합니다.*/
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const BoxStyle = styled.div`
  gap: 20px;
`;

const InputStyle = styled.input`
  border-radius: 5px;
  width: 200px;
  height: 40px;
  margin-bottom: 35px;
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

// const submitButtonHandler = async (user) => {
//   e.preventDefault();
//   if (user.password === user.checkpassword) {
//     await api.post("http://localhost:4000/user", user);
//     navigate("/login");
//   } else {
//     alert("비밀번호가 일치하지 않습니다.");
//   }
// };
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    checkpassword: "",
  });

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    if (user.password === user.checkpassword) {
      await api.post("/api/user/signup", user);
      navigate("/login");
      window.location.reload();
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <SignStyle>
      <MainHeader/>
      <SignBox onSubmit={submitButtonHandler}>
        <BoxStyle>
          <h2>회원가입</h2>
          <InputStyle
            type="text"
            value={user.username}
            required
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="아이디를 입력해주세요"
          />
        </BoxStyle>
        <BoxStyle>
          <InputStyle
            type="password"
            value={user.password}
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="비밀번호를 입력해주세요"
          />
        </BoxStyle>
        <BoxStyle>
          <InputStyle
            type="password"
            value={user.checkpassword}
            required
            onChange={(e) =>
              setUser({ ...user, checkpassword: e.target.value })
            }
            placeholder="비밀번호를 다시 입력해주세요"
          />
        </BoxStyle>
        <ButtonStyle type="submit">회원가입 완료</ButtonStyle>
      </SignBox>
    </SignStyle>
  );
}

export default Signup;
