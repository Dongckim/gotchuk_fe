import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2>login</h2>
      <label>아이디</label>
      <input />
      <label>비밀번호</label>
      <div>
        <button>로그인</button>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
