import { configureStore } from "@reduxjs/toolkit";
import match from "../modules/match";
import users from "../modules/login"
import gameList from "../modules/main"
import reply from "../modules/reply";

const store = configureStore({
  reducer: { 
    match, users, gameList,reply,
},
devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;