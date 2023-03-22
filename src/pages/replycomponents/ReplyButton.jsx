import styled from "styled-components";

const ReplyButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: #c9dcfe;
  border-radius: 10px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #a4a4a4;
  }
  :active {
    background-color: #787878;
  }
`;

export default ReplyButton;
