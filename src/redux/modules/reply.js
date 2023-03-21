import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { cookies, getCookie } from "../../shared/cookies";

const initialState = {
  reply : [],
  isLogin : false,
  isShowReply : false,
}

export const __addReply = createAsyncThunk(
  "addreply",
  async (payload, thunk) => {
      try{
          console.log(payload)
          const token = cookies.get('token')
          const { data } = await api.post (`/api/games/${payload.param}/comments/${payload.commentId}/reply`,{body:payload.body},{
              headers : {
                  Authorization: `Bearer ${token}`
              }
          })
          return data
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
);

export const __getReply = createAsyncThunk(
  "getreply",
  async ({commentId, param}, thunk) => {
      try{
        console.log('commentId' ,commentId)
          const { data } = await api.get(`api/games/${param}/comments/${commentId}/reply`)
          
          return thunk.fulfillWithValue(data.commentList)
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
);

// export const __postBody = createAsyncThunk(
//   'postBody',
//   async(payload, thunk) => {
//       try{
//           const token = getCookie('token')
//           console.log('sss',payload)
//           const response = await api.post(`api/games/${payload[1]}/comments`,payload[0],{
//               headers : {
//                   Authorization: `Bearer ${token}`
//               }
//           })
//           console.log(response)
//           return thunk.fulfillWithValue(payload[0])
//       }catch(error){
//           return thunk.rejectWithValue(error)
//       }
//   }
// )

// export const __EditBody = createAsyncThunk(
//   'EditBody',
//   async(payload, thunk) => {
//       try{
//           const token = getCookie('token')
//           const response = await api.patch(`api/games/${payload[1]}/comments/${payload[0].username}`,payload[0],{
//               headers : {
//                   Authorization: `Bearer ${token}`
//               }
//           })
//           return thunk.fulfillWithValue(payload[0])
//       }catch(error){
//           return thunk.rejectWithValue(error)
//       }
//   }
// )

// export const __DeleteBody = createAsyncThunk(
//   "DeleteBody",
//   async(payload, thunk) => {
//       const token = getCookie('token')
//       await api.delete(`api/games/${payload[1]}/comments/${payload[0]}`,{
//           headers : {
//               Authorization: `Bearer ${token}`
//           }
//       })
//       return thunk.fulfillWithValue(payload[0])
//   }
// )

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
      state.posts = action.payload
  },
  [__addReply.fulfilled] : (state, action) => {
      state.posts = [...state.posts, action.payload]
  },
  // [__EditBody.fulfilled] : (state,action) => {
  //     state.posts = state.posts.map((item)=> {
  //         if(item.id==action.payload.username){
  //             item.body = action.payload.body
  //             return item
  //         }else{
  //             return item
  //         }
  //     })
  // },
  // [__DeleteBody.fulfilled] : (state, action) => {
  //     state.posts = state.posts.filter((item) => item.id !== action.payload)
  // }
  } 
})


export const {replyHandler, openEditHandler} = replySlice.actions;
export default replySlice.reducer;