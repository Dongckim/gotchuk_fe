import { configureStore } from "@reduxjs/toolkit";
import match from "../modules/match";
import users from "../modules/login"
import gameList from "../modules/main"

const store = configureStore({
  reducer: { 
    match, users, gameList
},
devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;