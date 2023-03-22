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
    margin-top: 10px;
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    font-size: 30px;
    padding: 10px;
    display: flex;
    background-color: #ededed;
`