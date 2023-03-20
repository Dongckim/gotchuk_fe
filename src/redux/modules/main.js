import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";


const initialState = {
    gameList : [],
    error:null,
    isLogin:false,
}

export const __getgame = createAsyncThunk(
    'gamelist',
    async(payload, thunk) => {
        try{
            const {data} = await api.get('api/games/')
            // console.log('데이터',data)
            return thunk.fulfillWithValue(data.gameList)
        }catch(error){
            return thunk.rejectWithValue(error)
        }
    }
)


export const gameSlice = createSlice({
    name: 'gamelist',
    initialState,
    reducers:{},
    extraReducers:{
        [__getgame.fulfilled] : (state, action) => {
            state.gameList = action.payload
            
        },
        
        [__getgame.rejected] : (state, action) => {
            state.gameList = action.payload
        },
    }
})


export default gameSlice.reducer;