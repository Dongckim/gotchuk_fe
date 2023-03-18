import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    match : [],
    posts : [],
    error : null,
    isLogin : false,
    isShow : false,
    isShowEdit : false,
}

export const __thatMatch = createAsyncThunk(
    "thatMatch",
    async (payload, thunk) => {
        try{
            // const { data } = await axios.get(`${process.env.REACT_APP_COMMENTS}`)
            const { data } = await axios.get(`http://localhost:4000/gameInfo`)
            return thunk.fulfillWithValue(data)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const __thatMatchPosts = createAsyncThunk(
    "thatMatchPosts",
    async (payload, thunk) => {
        try{
            // const { data } = await axios.get(`${process.env.REACT_APP_COMMENTS}`)
            const { data } = await axios.get(`http://localhost:4000/commentList`)
            return thunk.fulfillWithValue(data)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const __postBody = createAsyncThunk(
    'postBody',
    async(payload, thunk) => {
        try{
            const response = await axios.post(`http://localhost:4000/commentList`,payload)
            return thunk.fulfillWithValue(payload)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const __EditBody = createAsyncThunk(
    'EditBody',
    async(payload, thunk) => {
        console.log(payload)
        try{
            console.log(payload)
            const response = await axios.patch(`http://localhost:4000/commentList/${payload.id}`,payload)
            return thunk.fulfillWithValue(payload)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const __DeleteBody = createAsyncThunk(
    "DeleteBody",
    async(id, thunk) => {
        await axios.delete(`http://localhost:4000/commentList/${id}`)
        return thunk.fulfillWithValue(id)
    }
)

export const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers:{
        openHandler : (state, action) => {
            state.isShow = !state.isShow
        },
        openEditHandler : (state, action) => {
            state.isShowEdit = !state.isShowEdit
        }
    },
    extraReducers:{
    [__thatMatch.fulfilled] : (state, action) => {
        state.match = action.payload
    },
    [__thatMatchPosts.fulfilled] : (state, action) => {
        state.posts = action.payload
    },
    [__postBody.fulfilled] : (state, action) => {
        state.posts = [...state.posts, action.payload]
    },
    [__EditBody.fulfilled] : (state,action) => {
        state.posts = state.posts.map((item)=> {
            if(item.id==action.payload.id){
                item.body = action.payload.body
                return item
            }else{
                return item
            }
        })
    },
    [__DeleteBody.fulfilled] : (state, action) => {
        state.posts = state.posts.filter((item) => item.id !== action.payload)
    }
    } 
})


export const {openHandler, openEditHandler} = matchSlice.actions;
export default matchSlice.reducer;