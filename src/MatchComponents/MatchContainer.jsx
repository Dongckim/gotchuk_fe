import styled from "styled-components";
import { STdiv } from "./MatchHeader";

const MatchPosts = ({children}) => {
    return(
        <STdiv theme={'container'}>
            {children}
        </STdiv>
    )
}   

export default MatchPosts;
