import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { cookies, getCookie } from "../../shared/cookies";

const initialState = {
  replyList : [],
  isLogin : false,
  isShowReply : false,
}

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
          console.log(response) 
          await thunk.dispatch(__getReply())
          return response
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
);

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

export const replySlice = createSlice({
  name: 'reply',
  initialState,
  reducers:{
    replyHandler : (state, action) => {
          state.isShowReply= !state.isShowReply
      }
  },
  extraReducers:{
  [__getReply.fulfilled] : (state, action) => {
      state.replyList = action.payload
  }
  } 
})


export const {replyHandler, openEditHandler} = replySlice.actions;
export default replySlice.reducer;