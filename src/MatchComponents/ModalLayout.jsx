import styled from "styled-components";

const ModalLayout = ({children}) => {
    return (
        <STdiv>
            {children}
        </STdiv>
    )
} 

export default ModalLayout;

const STdiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255,255,255,0.1);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`