import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../api/cookie";

const initialState = {
    users : [],
    error:null,
    isLogin:false,
}

export const __addUser = createAsyncThunk(
    "addUser",
    async(newuser, thunk) => {
        try{
            await axios.post('http://3.38.191.164/register',newuser)
            return thunk.fulfillWithValue(newuser)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const __loginUser = createAsyncThunk(
    "loginUser",
    async(thatUser, thunk)=> {
        try{
            const response = await axios.post('http://3.38.191.164/login',thatUser)
            const acessToken = response.data.token  
            setCookie('token', acessToken)
            return thunk.fulfillWithValue(thatUser)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers:{
        [__addUser.fulfilled] : (state, action) => {
            state.isLogin = false;
            state.users = [...state.users, action.payload]
            window.location.reload();
            alert('Welcome to Facebook!');
            
        },
        [__addUser.rejected] : (state, action) => {
            state.isLogin = false;
            window.alert(action.payload.response.data.message)
        },
        [__loginUser.fulfilled] : (state, action) => {
            state.isLogin = true;
            alert('Welcome to Facebook!');
        },
        [__loginUser.rejected] : (state, action) => {
            state.isLogin = false;
            window.alert(action.payload.response.data.message)
        },
    }
})

export default userSlice.reducer;