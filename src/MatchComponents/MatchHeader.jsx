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
            <div>
               <div>
                {match?.teamA} : {match?.scoreA}  
                </div>
                vs
                <div>
                    {match?.teamB} : {match?.scoreB}
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
    background-color: #ededed;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    ${({theme})=>{
        switch(theme){
            case 'matchinfo':
                return css`
                    margin-top: 100px;
                    height: 100px;
                    justify-content: space-around;
                `
            case `container`:
                return css`
                    margin-top: 50px;
                    height: auto;
                    flex-direction: column;
                    justify-content: center;
                `
        }
    }}
`