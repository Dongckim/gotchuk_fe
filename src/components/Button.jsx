import React from "react";
import styled from "styled-components";

const Button = ({ children, ...hoji }) => {
  return (

    <ButtonStyled {...hoji}>{children}</ButtonStyled>
  );
};

export default Button;


const ButtonStyled = styled.button`
  background-color: ${({ color }) => color};
  size: ${({size})=>size};
  border-radius:${({borderRadius})=>borderRadius};
  display: flex;
  justify-content: center;
  align-content: center;
`;