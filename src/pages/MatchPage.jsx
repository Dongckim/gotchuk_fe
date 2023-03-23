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
  __thatMatchPosts,
} from "../redux/modules/match";
import MatchPostToggle from "../MatchComponents/MatchPostToggle";
import ModalLayout from "../MatchComponents/ModalLayout";
import ModalContainer from "../MatchComponents/ModalContainer";
import Profile from "../MatchComponents/Profile";
import { RxTrash, RxUpdate } from "react-icons/rx";
import { AiOutlineComment } from "react-icons/ai";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainComponents/MainHeader";
import ReplyButton from "./replycomponents/ReplyButton";
import { getCookie } from "../shared/cookies";
import {
  editReplyHandler,
  replyHandler,
  storeReplyId,
  __addReply,
  __DeleteReply,
  __EditReply,
  __getReply,
} from "../redux/modules/reply";

function MatchPage() {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { posts, isShow, isShowEdit } = useSelector((state) => state.match);
  const { isShowReply } = useSelector((state) => state.reply);
  const { param } = useSelector((state) => state.match);
  const [newpost, setNewpost] = useState("");
  const [numid, setNumid] = useState("");
  const [reply, setReply] = useState("");
  const replyData = { body: reply, param: Number(param), commentId: numid };
  const value = posts.find((item) => item.id == numid)?.body;
  const { replyList, openEditReply, ReplyId } = useSelector(
    (state) => state.reply
  );

  const onSubmitHandler = (event, id) => {
    const token = getCookie("userId");
    event.preventDefault();
    dispatch(
      __EditBody([
        {
          id: numid,
          username: token,
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
                    <span
                      style={{
                        width: "80px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.username}
                    </span>
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
                      <div style={{ paddingTop: "15px" }}>{item.body}</div>
                    </div>

                    {item.createdAt ? (
                      <>
                        <span style={{ fontSize: "11px" }}>
                          {" "}
                          작성시간 : {new Date(item.createdAt).toLocaleString()}
                        </span>
                        <span
                          style={{ fontSize: "11px", marginBottom: "15px" }}
                        >
                          {" "}
                          수정시간 :{" "}
                          {new Date(item.modifiedAt).toLocaleString()}
                        </span>
                        {isShowReply && numid == item.id ? (
                          <div>
                            <div>
                              {replyList.map((item) => {
                                return (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div style={{ marginTop: "8px" }}>
                                      ↳ {"  "}
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          backgroundColor: "#7c7c7c",
                                          padding: "5px",
                                          borderRadius: "10px",
                                          color: "white",
                                          marginRight: "10px",
                                        }}
                                      >
                                        {item.username}
                                      </span>
                                      <span style={{ fontSize: "16px" }}>
                                        {item.body}
                                      </span>
                                    </div>
                                    <div>
                                      <button
                                        style={{
                                          backgroundColor: "transparent",
                                          border: "none",
                                          cursor: "pointer",
                                          fontWeight: "300",
                                        }}
                                        onClick={() => {
                                          dispatch(storeReplyId(item.id));
                                          dispatch(editReplyHandler());
                                        }}
                                      >
                                        수정
                                      </button>
                                      <button
                                        style={{
                                          backgroundColor: "transparent",
                                          border: "none",
                                          cursor: "pointer",
                                          fontWeight: "900",
                                        }}
                                        onClick={() => {
                                          dispatch(
                                            __DeleteReply([replyData, item])
                                          );
                                          dispatch(editReplyHandler());
                                        }}
                                      >
                                        삭제
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            {openEditReply ? (
                              <div
                                style={{
                                  margin: "8px 0 8px 0",
                                  display: "flex",
                                  alignItems: "center",
                                  width: "100%",
                                }}
                              >
                                <input
                                  style={{
                                    width: "70%",
                                    backgroundColor: "#d3e1ff",
                                    marginRight: "10px",
                                  }}
                                  value={reply}
                                  placeholder={"댓글을 수정하세요!"}
                                  onChange={(e) => {
                                    setReply(e.target.value);
                                  }}
                                />
                                <button
                                  onClick={() => {
                                    dispatch(
                                      __EditReply([
                                        { ...replyData, replyId: ReplyId },
                                        item,
                                      ])
                                    );
                                    dispatch(editReplyHandler());
                                    setReply("");
                                  }}
                                >
                                  수정완료
                                </button>
                              </div>
                            ) : (
                              <div
                                style={{
                                  margin: "8px 0 8px 0",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <span style={{ marginRight: "10px" }}>
                                  댓글 입력
                                </span>
                                <input
                                  style={{ width: "70%" }}
                                  value={reply}
                                  placeholder={"댓글을 입력하세요!"}
                                  onChange={(e) => {
                                    setReply(e.target.value);
                                  }}
                                />
                                <button
                                  onClick={() => {
                                    dispatch(__addReply(replyData));
                                    setReply("");
                                  }}
                                >
                                  완료
                                </button>
                              </div>
                            )}
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <span style={{ fontSize: "10px" }}>
                        새로고침하면 작성시간과 수정시간을 볼 수 있어요!
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginRight: "10px",
                  }}
                >
                  <ReplyButton
                    onClick={async () => {
                      dispatch(replyHandler());
                      setNumid(item.id);
                      dispatch(
                        __getReply({ ...replyData, commentId: item.id })
                      );
                    }}
                  >
                    <AiOutlineComment />
                  </ReplyButton>
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
  background-color: black;
  height: 100%;
`;
const EditButton = styled.div`
  width: 40px;
  height: 40px;
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
