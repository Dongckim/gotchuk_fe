import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { openHandler, __postBody } from "../redux/modules/match";
import uuid4 from "uuid4";
import { getCookie } from "../shared/cookies";

const ModalContainer = ({children}) => {
    const dispatch = useDispatch();
    const [newpost, setNewpost] = useState('');

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const id = getCookie('userId')
        dispatch(__postBody({
            "id": id,
            "body": newpost,
        }));   
        dispatch(openHandler());
    }



    return(
        <STdiv>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
               {children}
                <button onClick={()=>{
                dispatch(openHandler())
                }}>취소</button> 
            </div>
            <form style={{display:'flex', flexDirection:'column'}}
            onSubmit={onSubmitHandler}>
                <textarea
                placeholder="당신의 팀을 응원해주세요!"
                style={{height:'400px', marginBottom:'20px'}}
                onChange = {(event)=>{setNewpost(event.target.value)}} 
                maxLength = {100}
                type="text" />
                <button>제출</button>
            </form>
        </STdiv>
    )
}

export default ModalContainer;

const STdiv = styled.div`
    height: 500px;
    width: 300px;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 20px;
`