import styled from "styled-components";

const MatchPostToggle = () => {
    return (
        <PostToggle>
            작성
        </PostToggle>
    )
}

export default MatchPostToggle;

const PostToggle = styled.div`

    left: 100px;
    width: 60px;
    height: 60px;
    border: 1px solid gray;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    :hover{
        background-color: #c3c3c3ff;
    }
    :active{
        background-color: #878787;
    }
`