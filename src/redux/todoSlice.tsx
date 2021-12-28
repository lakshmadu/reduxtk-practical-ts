import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Itodo{
    id:Date,
    title:string,
    completed:boolean,
}


const initialState = [] as Itodo[];


export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<string>)=>{
            const todo = {
                id: new Date(),
                title: action.payload,
                completed: false,
            };
            state.push(todo);
                   
        },
        toggleComplete: (state, action) =>{
            const index = state.findIndex((todo)=>todo.id === action.payload.id);
            state[index].completed =action.payload.completed;
        },
        deleteTodo: (state,action)=>{
            return state.filter((todo)=> todo.id !== action.payload.id);
        },
        
    },

});

export const { addTodo, toggleComplete, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;