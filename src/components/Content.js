import { useRef } from "react"
import Addtodo from "./Addtodo"
import CountTodo from "./CountTodo";
import ShowTodo from "./ShowTodo"
import { todoListSelector } from "../redux/selector";
import { useSelector } from "react-redux";




const Content = () => {
    const inputEl = useRef(null);
    // const[todos, setTodos] = useState([])

    // const handleDeleteTodo = useCallback((id)=>{
    //     setTodos( todos.filter((todo) => {
    //         return todo.id !== id
    //     }))
    // },[todos])

    // const handleChecked = useCallback((id)=>{
    //     setTodos((prevTodo) => prevTodo.map((todo) => {
    //             if (todo.id === id) {
    //                 todo.checked = !todo.checked;
    //             }
                
    //             return todo;
    //         })
    //      )
    // },[todos])

    const todos = useSelector((state) => state.todoList.todoState);
    
    return (
        <div className="bg-white p-2.5">
            <Addtodo
                inputEl = {inputEl} />
            <ul className="h-80 overflow-scroll" >
                {todos.length > 0 ? (todos.map((todo)=>
                    (<ShowTodo key = {todo.id}
                        todo = {todo}
                    />)
                
                )): ''}

            </ul>
            <CountTodo todos = {todos}/>
        </div>
    )
}
export default Content