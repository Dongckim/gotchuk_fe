import React, { useState } from "react";
import styled from "styled-components";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";

const SignBox = styled.form`
  background-color: rgb(106, 185, 106);
  height: 95vh;
  display: "flex";
  justify-content: "center";
  align-content: "center";
`;

const BoxStyle = styled.div`
  gap: 20px;
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
      console.log(user);
      await api.post("/api/user/signup", user);
      navigate("/login");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <SignBox onSubmit={submitButtonHandler}>
      아이디
      <BoxStyle>
        <input
          type="text"
          value={user.username}
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="아이디를 입력해주세요"
        />
      </BoxStyle>
      비밀번호
      <BoxStyle>
        <input
          type="password"
          value={user.password}
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
        />
      </BoxStyle>
      비밀번호 확인
      <BoxStyle>
        <input
          type="password"
          value={user.checkpassword}
          required
          onChange={(e) => setUser({ ...user, checkpassword: e.target.value })}
          placeholder="비밀번호를 다시 입력해주세요"
        />
      </BoxStyle>
      <button type="submit">회원가입 완료</button>
    </SignBox>
  );
}

export default Signup;
