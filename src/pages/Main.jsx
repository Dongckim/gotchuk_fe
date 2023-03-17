import React from "react";
import { Link } from "react-router-dom";
import MainStBox from "../components/MainStBox";

const Main = () => {
    return(
        <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}> 
           <MainStBox>
            <div style={{backgroundColor:'rgb(106, 185, 106)', height:'100vh'}}>
            메인입니다.
            <Link to = {'/login'}>
                <button>로그인</button>
                </Link>
                </div>
            </MainStBox> 
        </div>
    )
}

export default Main;