import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { cookies, getCookie } from "../../shared/cookies";

const initialState = {
  replyList : [],
  isLogin : false,
  isShowReply : false,
  openEditReply : false,
  ReplyId : 0,
}

//대댓글 추가
export const __addReply = createAsyncThunk(
  "addreply",
  async (payload, thunk) => {
      try{
          const token = cookies.get('token')
          const response = await api.post(`/api/games/${payload.param}/comments/${payload.commentId}/reply`,{body:payload.body},{
              headers : {
                  Authorization: `Bearer ${token}`
              }
          })
          await thunk.dispatch(__getReply(payload))
          return thunk.fulfillWithValue(payload)
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
);


//대댓글 조회
export const __getReply = createAsyncThunk(
  "getreply",
  async({commentId, param}, thunk) => {
      try{
          const { data } = await api.get(`api/games/${param}`)
          const {replyList} = data.commentList.filter((item)=> item.id == commentId)[0]
          return thunk.fulfillWithValue(replyList)
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
);

//대댓글 삭제
export const __DeleteReply = createAsyncThunk(
    "DeleteReply",
    async(payload, thunk) => {
        console.log("payload" , payload)
        try{const token = getCookie('token')
            const response = await api.delete(`/api/games/${payload[0].param}/comments/${payload[0].commentId}/reply/${payload[1].id}`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
        return thunk.fulfillWithValue(payload[1].id)}
        catch(error){
            
            alert('당신 대댓글 맞아?')
        }
    } 
)
//대댓글 수정
export const __EditReply = createAsyncThunk(
    'EditReply',
    async(payload, thunk) => {
      console.log(payload)
        try{
            const token = getCookie('token')
            await api.patch(`/api/games/${payload[0].param}/comments/${payload[0].commentId}/reply/${payload[0].replyId}`
                ,{body: payload[0].body,},{headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            await thunk.dispatch(__getReply(payload[0]))
        }catch(error){
            alert('당신 댓글 맞아?')
            return thunk.rejectWithValue(error)
        }
    }
)


export const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers:{
    replyHandler : (state, action) => {
          state.isShowReply= !state.isShowReply
      },

      editReplyHandler : (state, action)=>{
            state.openEditReply = !state.openEditReply
      },
      storeReplyId : (state,action) => {
        state.ReplyId = action.payload
      }
  },
  extraReducers:{
  [__getReply.fulfilled] : (state, action) => {
      state.replyList = action.payload
  },

  [__DeleteReply.fulfilled] : (state, action) => {
    state.replyList = state.replyList.filter((item) => item.id !== action.payload)
  },
  // [__addReply.fulfilled] : (state, action) => {
  //   state.replyList = [...state.replyList, action.payload]
  // },

// [__EditReply.fulfilled] : (state,action) => {
//     state.replyList = state.replyList.map((item)=> {
//         if( item.id == action.payload.id){
//             item = action.payload
//             return item
//         }else{
//             return item
//         }
//     })
// },

  } 
})


export const {storeReplyId, replyHandler, editReplyHandler} = replySlice.actions;
export default replySlice.reducer;