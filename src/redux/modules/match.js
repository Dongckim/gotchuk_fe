import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../axios/api";
import { getCookie } from "../../shared/cookies";

const initialState = {
    match : [],
    posts : [],
    param : [],
    commentId : 0,
    error : null,
    isLogin : false,
    isShow : false,
    isShowEdit : false,
}

export const __thatMatch = createAsyncThunk(
    "thatMatch",
    async (gameId, thunk) => {
        try{
            const token = getCookie('token')
            const { data } = await api.get(`api/games/${gameId}`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            return thunk.fulfillWithValue([data.gameInfo, gameId])
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const __thatMatchPosts = createAsyncThunk(
    "thatMatchPosts",
    async (gameId, thunk) => {
        try{
            // const { data } = await axios.get(`${process.env.REACT_APP_COMMENTS}`)
            const token = getCookie('token')
            const { data } = await api.get(`api/games/${gameId}`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            return thunk.fulfillWithValue(data.commentList)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
);

export const __postBody = createAsyncThunk(
    'postBody',
    async(payload, thunk) => {
        const { gameId, body } = payload
        try{
            const token = getCookie('token')
            const response = await api.post(`api/games/${gameId}/comments`,body,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            await thunk.dispatch(__thatMatchPosts(gameId));
            return response
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const __EditBody = createAsyncThunk(
    'EditBody',
    async(payload, thunk) => {
        try{
            console.log(payload)
            const token = getCookie('token')
            await api.patch(`api/games/${payload[1]}/comments/${payload[0].id}`,payload[0],{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            return thunk.fulfillWithValue(payload[0])
        }catch(error){
            alert('당신 댓글 맞아?')
            return thunk.rejectWithValue(error)
        }
    }
)

export const __DeleteBody = createAsyncThunk(
    "DeleteBody",
    async(payload, thunk) => {
        try{const token = getCookie('token')
            const response = await api.delete(`api/games/${payload[1]}/comments/${payload[0]}`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
        return thunk.fulfillWithValue(payload[0])}
        catch(error){
            alert('당신 댓글 맞아?')
        }
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
        state.match = action.payload[0]
        state.param = action.payload[1]
    },
    [__thatMatchPosts.fulfilled] : (state, action) => {
        state.posts = action.payload
    },
    [__postBody.fulfilled] : (state, action) => {
        // state.posts = [action.payload[0], ...state.posts]
        // state.commentId = action.payload[1]
    },
    [__EditBody.fulfilled] : (state,action) => {
        state.posts = state.posts.map((item)=> {
            if( item.id == action.payload.id){
                item = action.payload
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