import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { cookies } from "../../shared/cookies";
import jwt_decode from "jwt-decode";


const initialState = {
    users : [],
    error:null,
    isLogin:false,
    token:false,
}

// export const __addUser = createAsyncThunk(
//     "addUser",
//     async(newuser, thunk) => {
//         try{
//             await axios.post('http://3.38.191.164/register',newuser)
//             return thunk.fulfillWithValue(newuser)
//         }catch(error){
//             return thunk.rejectWithValue(error)
//         }
//     }
// )


export const __loginUser = createAsyncThunk(
    "loginUser",
    async(thatUser, thunk)=> {
        try{
            const response = await api.post('/api/user/',thatUser)
            console.log(response)
             const token = response.headers.authorization
             const newtoken = token.split(" ")[1]
            //  console.log(newtoken)
             const payload = jwt_decode(newtoken);
             console.log(payload)
             cookies.set("token", newtoken,{path:'/'})
             cookies.set("userId",payload.sub,{path:"/"})
            return thunk.fulfillWithValue(payload)
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
        [__loginUser.fulfilled] : (state, action) => {
            state.isLogin = true;
            state.users = action.payload
            alert("Welcome to 가축 World!!");
        },
        [__loginUser.rejected] : (state, action) => {
            state.isLogin = false;
            window.alert(action.payload)
        },
    }
})

export default userSlice.reducer;