import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


// let initialState = []
// const GetApi = async ()=>{

//     const res = await axios.get('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
//     initialState = res.data
//     console.log(initialState)
// }
// GetApi()

// console.log(initialState)


export default createSlice({
    name: "todoList",
    initialState: {
        todoState:[]
    },
    reducers: {
        setInit:(state, action)=>{
            void(state.todoState = action.payload)
        },
        addTodo: (state, action) => {
            state.todoState.push(action.payload);
        }, 
        removeTodo: (state, action) => {
            state.todoState = state.todoState.filter(todo => todo.id !== action.payload);
            
        },
        checkedTodo: (state, action) => {
            
            const todo = state.todoState.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.checked = !todo.checked;
                axios.put('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist/'+action.payload,{
                            checked: todo.checked
                } )
            }
        },
    },
});
