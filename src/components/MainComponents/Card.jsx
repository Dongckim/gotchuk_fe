import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Stbox = styled.div`
  width: 700px;
  height: 110px;
  border: 1px solid red;
  margin: 20px;
  display: flex;
  background-color: rgb(106, 185, 106);
  border-radius: 10px;
`;

const Cardbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: left;
`;

function Card(props) {
  const list = props.gameList;
  return (
    <Stbox>
      <Cardbox>
        <div>
          <label>
            {list.teamA} {list.scoreA}골
          </label>
          <h2>vs</h2>
          <label>
            {list.teamB} {list.scoreB}골
            <Link to={`/match/${list.gameId}`}>
              <button style={{ marginLeft: "400px", width: "200px" }}>
                채 팅 시 작
              </button>
            </Link>
          </label>
        </div>
      </Cardbox>
    </Stbox>
  );
}

export default Card;
