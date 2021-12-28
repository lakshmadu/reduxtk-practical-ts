import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { title } from "process";

export interface titleState{
    title:string;
}

const initialState : titleState = {
    title:'hello',
}

export const TitleSlice = createSlice({
    name:'title',
    initialState,
    reducers:{
        changeTitle:(state,action: PayloadAction<string>)=>{
            state.title=action.payload;
        },
    },
})

export const {changeTitle} = TitleSlice.actions;

export default TitleSlice.reducer