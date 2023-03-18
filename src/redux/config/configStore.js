import { configureStore } from "@reduxjs/toolkit";
import match from "../modules/match";

const store = configureStore({
  reducer: { 
    match,
},  
devTools: process.env.NODE_ENV === "developmetns" ? false : true,
});

export default store;