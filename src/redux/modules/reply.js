const initialState = {
  match : [],
  posts : [],
  param : [],
  error : null,
  isLogin : false,
  isShow : false,
  isShowEdit : false,
}

export const __thatMatch = createAsyncThunk(
  "thatMatch",
  async (gameId, thunk) => {
      try{
          console.log(gameId)
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
      try{
          const token = getCookie('token')
          console.log('sss',payload)
          const response = await api.post(`api/games/${payload[1]}/comments`,payload[0],{
              headers : {
                  Authorization: `Bearer ${token}`
              }
          })
          console.log(response)
          return thunk.fulfillWithValue(payload[0])
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
)

export const __EditBody = createAsyncThunk(
  'EditBody',
  async(payload, thunk) => {
      try{
          const token = getCookie('token')
          const response = await api.patch(`api/games/${payload[1]}/comments/${payload[0].username}`,payload[0],{
              headers : {
                  Authorization: `Bearer ${token}`
              }
          })
          return thunk.fulfillWithValue(payload[0])
      }catch(error){
          return thunk.rejectWithValue(error)
      }
  }
)

export const __DeleteBody = createAsyncThunk(
  "DeleteBody",
  async(payload, thunk) => {
      const token = getCookie('token')
      await api.delete(`api/games/${payload[1]}/comments/${payload[0]}`,{
          headers : {
              Authorization: `Bearer ${token}`
          }
      })
      return thunk.fulfillWithValue(payload[0])
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
      state.posts = [...state.posts, action.payload]
  },
  [__EditBody.fulfilled] : (state,action) => {
      state.posts = state.posts.map((item)=> {
          if(item.id==action.payload.username){
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