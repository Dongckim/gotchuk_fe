import styled from "styled-components";
import {BsFillPersonFill} from "react-icons/bs"

const Profile = () => {
    return (
        <STdiv>
            <BsFillPersonFill/>
        </STdiv>
    )
}

export default Profile;

const STdiv = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    font-size: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ededed;
`