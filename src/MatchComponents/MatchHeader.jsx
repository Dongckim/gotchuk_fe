import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { __thatMatch } from "../redux/modules/match";

const MatchHeader = ({children}) => {
    const {match} = useSelector(state => state.match)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(__thatMatch());
    },[])

    return (
        <STdiv theme={'matchinfo'}>
            <div style={{display : "flex", gap:'150px', alignItems:'center'}}>
               <div style={{display : "flex", flexDirection:'column', alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'35px',fontWeight:'600',width : '150px'}}>{match?.teamA}</span>
                    <span style={{fontSize:'30px'}}>{match?.scoreA} </span> 
                </div>
                <div style={{display:'flex', flexDirection:'column',gap:'10px',alignItems:'center', marginBottom:'10px'}}>
                    <span style={{fontSize:'55px'}}>vs </span>
                    <span>75:49</span> 
                </div>
                <div style={{display : "flex", flexDirection:'column', alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'35px',fontWeight:'600', width : '150px'}}>{match?.teamB}</span>
                    <span style={{fontSize:'30px'}}>{match?.scoreB}</span>
                </div> 
            </div>
            
            {children}
        </STdiv>
    )
}

export default MatchHeader;

export const STdiv = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    ${({theme})=>{
        switch(theme){
            case 'matchinfo':
                return css`
                    margin-top: 100px;
                    height: 150px;
                    justify-content: space-around;
                `
            case `container`:
                return css`
                    margin-top: 50px;
                    height: auto;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 150px;
                `
        }
    }}
`