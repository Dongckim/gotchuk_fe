import styled from "styled-components";

const MatchPost = ({children}) => {
    return(
        <Everytimepost>
            {children}
        </Everytimepost>
    )
}

export default MatchPost;

const Everytimepost = styled.div`
    width: 100%;
    background-color: rgb(255,255,255,0);
    border-bottom: 1px solid #a4a4a4;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`