import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../axios/api";
import { getCookie } from "../../shared/cookies";

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
            const token = getCookie('token')
            const { data } = await api.get(`api/games/1`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('코네트', data)
            return thunk.fulfillWithValue(data.commentList)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const __postBody = createAsyncThunk(
    'postBody',
    async(payload, thunk) => {
        try{
            const token = getCookie('token')
            const response = await api.post(`api/games/1/comments`,payload,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
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
            const token = getCookie('token')
            const response = await api.patch(`api/games/1/comments/${payload.id}`,payload,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            return thunk.fulfillWithValue(payload)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const __DeleteBody = createAsyncThunk(
    "DeleteBody",
    async(id, thunk) => {
        console.log(id)
        const token = getCookie('token')
        await api.delete(`api/games/1/comments/${id}`,{
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
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