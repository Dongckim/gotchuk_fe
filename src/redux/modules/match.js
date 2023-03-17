import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    match : [],
    posts : [],
    error : null,
    isLogin : false,
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


export const matchSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers:{
    [__thatMatch.fulfilled] : (state, action) => {
        state.match = action.payload
    },
    [__thatMatchPosts.fulfilled] : (state, action) => {
        state.posts = action.payload
    },
    }  
})

export default matchSlice.reducer;