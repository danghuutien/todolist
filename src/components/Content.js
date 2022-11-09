import { useCallback, useState, useRef  } from "react"
import { v4 as uuidv4 } from "uuid";
import Addtodo from "./Addtodo"
import CountTodo from "./CountTodo";
import ShowTodo from "./ShowTodo"
const Content = ()=>{
    console.log('Content')
    const inputEl = useRef(null);
    const[todos, setTodos] = useState([])
    const handleDeleteTodo = 
        (id)=>{
            setTodos( todos.filter((todo) => {
                return todo.id !== id
            }))
        }
    const handleChecked = (id)=>{
        setTodos(todos.map((todo) => {
            if (todo.id === id) 
                todo.checked = !todo.checked;
                return todo;
            }))
    }
// console.log(handleChecked)
    const addtodo = useCallback( (title)=>{
        if (!title) {
            alert("Bạn phải nhập trường này rồi mới click");
            return;
        } else {
            let newTodo = {
                id: uuidv4(),
                title: title,
                checked: false,
            };
            setTodos((prevTodo)=>[...prevTodo, newTodo]); 
        }
    }, [])
   return (
        <div className="bg-white p-2.5">
            
            <Addtodo
            inputEl = {inputEl} onHandleTodos = {addtodo}/>
            <ul style={{height: '330px',overflowY:'scroll'}} >
                {todos.map((todo)=>
                    (<ShowTodo key = {todo.id}
                        title = {todo.title}
                        id = {todo.id}
                        checked = {todo.checked}

                        onHandleDeleteTodo = {handleDeleteTodo}
                        onHandleChecked = {handleChecked}
                    />)
                
                )}

            </ul>
            <CountTodo todos = {todos}/>
        </div>
    )
}
export default Content