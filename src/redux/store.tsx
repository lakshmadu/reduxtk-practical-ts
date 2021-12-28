import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import TitleSlice from "./TitleSlice";
import todoSlice  from "./todoSlice";


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        titles:TitleSlice,  
        todos:todoSlice,     
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

