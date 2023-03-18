import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openHandler } from "../redux/modules/match";
import { GoPencil } from "react-icons/go"

const MatchPostToggle = ({children}) => {
    const dispatch = useDispatch();
    return (
        <>
            <PostToggle onClick={()=>{dispatch(openHandler())}}>
                내 팀 응원하기 <GoPencil/>
            </PostToggle>
            {children}
        </>
       
    )
}

export default MatchPostToggle;

const PostToggle = styled.div`
    position: fixed;
    width: 1000px;
    min-width: 399px;
    height: 60px;
    background-color: #ffffff;
    font-weight: 800;
    font-size: 20px;
    gap: 10px;
    top: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    :hover{
        background-color: #c3c3c3ff;
    }
    :active{
        background-color: #878787;
    }
`