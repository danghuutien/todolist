import axios from 'axios'

export const getTodos = async ()=>{
    axios.get('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
    .then((res)=>{
        return res.data
    })
}

export const saveTodo = async ()=>{
    await axios.post('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
    .then((res)=>{
        return res.data
    })
}

export const updateTodo = async ()=>{
    await axios.put('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
    .then((res)=>{
        return res.data
    })
}

export const deleteTodo = async ()=>{
    await axios.delete('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
    .then((res)=>{
        return res.data
    })
}