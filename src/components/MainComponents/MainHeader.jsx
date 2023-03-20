import styled from "styled-components";

const MainHeader = () => {
    return (
        <STdiv>
            <Mdiv>⚽️ GotChuck</Mdiv>
            <Fontdiv>FotMob</Fontdiv>
            <Fontdiv>Naver Sports</Fontdiv>
            <Fontdiv>Youtube Estar TV</Fontdiv> 
            <div style={{display:'flex', gap:'15px'}}>
                <Fontdiv>
                    로그인
                </Fontdiv>
                <Fontdiv>
                    회원가입
                </Fontdiv>
            </div>
        </STdiv>
    )
}

export default MainHeader;

const STdiv = styled.div`
    font-family: 'IBMPlexSansKR-Regular';
    position: fixed;
    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    padding-left:50px;
    gap: 30px;
    
`
const Fontdiv = styled.div`
    font-size: 25px;
    margin-top: 10px;
`

const Mdiv = styled.div`
    font-size: 40px;
    font-weight: 600;
    padding-right: 30px;
`   