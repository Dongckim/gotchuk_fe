import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Stbox = styled.div`
  width: 1000px;
  height: 110px;
  border: 1px solid #ededed;
  margin: 20px;
  display: flex;
  border-radius: 10px;
  color: #ffffff;
`;

const Cardbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

function Card(props) {
  const navigate = useNavigate();
  const list = props.gameList;
  return (
    <Stbox>
      <Cardbox>
        <Wrapper>
        <label style={{width:'500px', fontWeight:'700', display:'flex', justifyContent:'center'}}>
          {list.teamA} {list.scoreA}골
        </label>
        <h2>vs</h2>
        <label style={{width:'500px', fontWeight:'700' ,display:'flex', justifyContent:'center'}}>
          {list.teamB} {list.scoreB}골
        </label>
        </Wrapper>
        <STbutton 
        onClick={()=>{navigate(`/match/${list.gameId}`)}}
        >
            채 팅 참 여
        </STbutton>
      </Cardbox>
    </Stbox>
  );
}

export default Card;

const Wrapper = styled.div`
  display: flex;
  gap:40px;
  margin-left: 40px;
  align-items: center;
  justify-content: center;
  width: 600px;
`

const STbutton = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  color: black;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 25px;
  :hover{
    background-color: #f37287;
  }
  :active{
    background-color: #ef506b;
  }
`