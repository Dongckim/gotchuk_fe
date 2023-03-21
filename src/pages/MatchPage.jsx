import React, { useEffect, useState } from "react";
import MatchHeader from "../MatchComponents/MatchHeader";
import MatchContainer from "../MatchComponents/MatchContainer";
import styled from "styled-components";
import MatchPost from "../MatchComponents/MatchPost";
import { useDispatch, useSelector } from "react-redux";
import {
  openEditHandler,
  __DeleteBody,
  __EditBody,
  __postBody,
  __thatMatchPosts,
} from "../redux/modules/match";
import MatchPostToggle from "../MatchComponents/MatchPostToggle";
import ModalLayout from "../MatchComponents/ModalLayout";
import ModalContainer from "../MatchComponents/ModalContainer";
import Profile from "../MatchComponents/Profile";
import { RxTrash, RxUpdate } from "react-icons/rx";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainComponents/MainHeader";
import ReplyButton from "./replycomponents/ReplyButton";

function MatchPage() {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { posts, isShow, isShowEdit } = useSelector((state) => state.match);
  const { param } = useSelector((state) => state.match);
  const [newpost, setNewpost] = useState("");
  const [numid, setNumid] = useState("");
  const value = posts.find((item) => item.id == numid)?.body;

  console.log(gameId);

  const onSubmitHandler = (event, id) => {
    event.preventDefault();
    dispatch(
      __EditBody([
        {
          username: id,
          body: newpost,
        },
        +param,
      ])
    );
    dispatch(openEditHandler());
  };

  const onDeleteHandler = (id) => {
    dispatch(__DeleteBody([id, +param]));
  };

  const onStoreItemNum = (id) => {
    setNumid(id);
  };

  useEffect(() => {
    dispatch(__thatMatchPosts(gameId));
  }, []);

  return (
    <Matchpagebackground>
      <MainHeader gameId={gameId} />
      <MainStBox>
        <MatchHeader gameId={gameId}></MatchHeader>
        <MatchContainer>
          {posts.map((item) => {
            return (
              <MatchPost key={item.id}>
                <div style={{ display: "flex", gap: "80px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "20px",
                      gap: "15px",
                    }}
                  >
                    <Profile />
                    <span>{item.username}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "17px",
                        marginBottom: "10px",
                        width: "500px",
                      }}
                    >
                      {item.body}
                    </div>
                    <span style={{ fontSize: "11px" }}>
                      {" "}
                      작성시간 : {item.createdAt}
                    </span>
                    <span style={{ fontSize: "11px" }}>
                      {" "}
                      수정시간 : {item.modifiedAt}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginRight: "20px",
                  }}
                >
                  <ReplyButton>댓글</ReplyButton>
                  <EditButton
                    onClick={() => {
                      dispatch(openEditHandler());
                      onStoreItemNum(item.id);
                    }}
                  >
                    <RxUpdate />
                  </EditButton>
                  <EditButton onClick={() => onDeleteHandler(item.id)}>
                    <RxTrash />
                  </EditButton>
                </div>
              </MatchPost>
            );
          })}
          {isShowEdit ? (
            <ModalLayout>
              <STdiv>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <span>게시글 수정하기</span>
                  <button
                    onClick={() => {
                      dispatch(openEditHandler());
                    }}
                  >
                    취소
                  </button>
                </div>
                <form
                  style={{ display: "flex", flexDirection: "column" }}
                  onSubmit={(event) => {
                    onSubmitHandler(event, numid);
                  }}
                >
                  <textarea
                    style={{ height: "400px", marginBottom: "20px" }}
                    onChange={(event) => {
                      setNewpost(event.target.value);
                    }}
                    defaultValue={value}
                    type="text"
                  />
                  <button>수정하기</button>
                </form>
              </STdiv>
            </ModalLayout>
          ) : null}
        </MatchContainer>
      </MainStBox>
      <MatchPostToggle>
        {isShow ? (
          <ModalLayout>
            <ModalContainer>게시글 작성</ModalContainer>
          </ModalLayout>
        ) : null}
      </MatchPostToggle>
    </Matchpagebackground>
  );
}

export default MatchPage;

const Matchpagebackground = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/69358298_420705388576125_2524618687537741824_n.jpg?stp=dst-jpg_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=36a2c1&_nc_ohc=nYGe-H2XhjgAX83WSim&_nc_ht=scontent-gmp1-1.xx&oh=00_AfBlLlpGegK_5SGvjJu3wyZ7-wE_f4qdbO-oAkDWCDyW5g&oe=643CFE7F");
  background-size: cover;
  size: 100vh;
  height: 100%;
`;
const EditButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c9dcfe;
  border-radius: 10px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: #a4a4a4;
  }
  :active {
    background-color: #787878;
  }
`;
const STdiv = styled.div`
  height: 500px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
`;

const MainStBox = styled.div`
  min-width: 100px;
  width: 1000px;
  padding-top: 50px;
  justify-content: center;
`;
