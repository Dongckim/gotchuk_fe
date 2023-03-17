import React, { useEffect } from 'react'
import MainStBox from '../components/MainStBox'
import MatchHeader from '../MatchComponents/MatchHeader'
import MatchContainer from '../MatchComponents/MatchContainer'
import styled from 'styled-components'
import MatchPost from '../MatchComponents/MatchPost'
import { useDispatch, useSelector } from 'react-redux'
import { __thatMatchPosts } from '../redux/modules/match'
import MatchPostToggle from '../MatchComponents/MatchPostToggle'
import ModalLayout from '../MatchComponents/ModalLayout'

function MatchPage() {
  const dispatch = useDispatch();
  const {posts} = useSelector(state=> state.match)


  useEffect(()=>{
    dispatch(__thatMatchPosts());
  },[])

  return (
    <Matchpagebackground>
      <MainStBox>
          <MatchHeader>
            <MatchPostToggle>
              <ModalLayout>
                zlz
              </ModalLayout>
            </MatchPostToggle>
          </MatchHeader>
            <MatchContainer>
              {posts.map((item) => {
                return (
                  <MatchPost key={item.commentId}>
                    {item.username}
                    {item.body}
                    {item.createdAt}
                    {item.modifiedAt}
                  </MatchPost>
                )
              })}
            
            </MatchContainer>
        </MainStBox>
    </Matchpagebackground>   
  )
}

export default MatchPage

const Matchpagebackground = styled.div`
  display: flex;
  justify-content:center;
  background-color : rgb(106, 185, 106);
  height:100vh;
`