import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainHeader = () => {
    const navigate = useNavigate();
    return (
        <STdiv>
            <Wrapper>
                <div style={{display:'flex', alignItems:'center', gap:'50px'}}>
                    <Mdiv onClick={()=>{navigate('/')}}>
                        <div> ⚽️ </div>
                        <div>GotChuck</div>
                    </Mdiv>
                    <Fontdiv>FotMob</Fontdiv>
                    <Fontdiv>Naver Sports</Fontdiv>
                    <Fontdiv>Youtube E-Star TV</Fontdiv>  
                </div>
                <div style={{display:'flex', gap:'20px'}}>
                    <Fontdiv onClick={()=>{navigate('/login')}}>
                        Login
                    </Fontdiv>
                    <Fontdiv onClick={()=>{navigate('/signup')}}>
                        Signup
                    </Fontdiv>
                </div>
            </Wrapper>
        </STdiv>
            
            
    )
}

export default MainHeader;

const Wrapper = styled.div`
    padding-left: 30px;
    padding-right: 40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100vw;
`

const STdiv = styled.div`
    font-family: 'IBMPlexSansKR-Regular';
    position: fixed;
    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    color: #ffffff;
`
const Fontdiv = styled.div`
    font-size: 25px;
    cursor: pointer;
`

const Mdiv = styled.div`
    display: flex;
    gap: 15px;
    font-size: 40px;
    font-weight: 600;
    cursor: pointer;
    align-items: center;
`   