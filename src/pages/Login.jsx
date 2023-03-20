import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __loginUser } from "../redux/modules/login";

const LoginBox = styled.form`
  background-color: rgb(106, 185, 106);
  height: 95vh;
  display: "flex";
  flex-direction: column;
  justify-content: "center";
  align-content: "center";
`;
const BoxStyle = styled.div`
  gap: 20px;
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
    <LoginBox
      onSubmit={(e) => {
        e.preventDefault();
        dispacth(__loginUser(user));
        navigate("/");
      }}
    >
      <h2>login</h2>
      <BoxStyle>
        아이디
        <input
          type="text"
          value={user.username}
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="아이디를 입력해주세요"
        />
      </BoxStyle>
      <BoxStyle>
        비밀번호
        <input
          type="password"
          value={user.password}
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
        />
      </BoxStyle>

      <div>
        <button>로그인</button>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </LoginBox>
  );
}

export default Login;
