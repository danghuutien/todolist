import { memo, useCallback } from "react"
import { useDispatch } from 'react-redux'
import todosSlice from "../redux/todosSlice";

const ShowTodo = ({todo})=>{
    
    // console.log('ShowTodo')
    const dispatch = useDispatch();
    const onDelete = useCallback(()=>{
        dispatch(todosSlice.actions.removeTodo(todo.id))
    },[])    

    const onCheck = useCallback(()=>{
        dispatch(todosSlice.actions.checkedTodo(todo.id))
    },[])
    return (
        <li style={{borderBottom:'1px solid gray'}} className="flex justify-between mt-5 py-2" >
            <div>
                <input id={todo.id} type="checkbox" onChange={onCheck}  style={{cursor:'pointer'}}/>
                <label htmlFor={todo.id} style={todo.checked ? {textDecoration: 'line-through'}:{}}  
                        className="ml-2.5">{todo.title}</label>
            </div>
            <button onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></button>
        </li>
    )
}

export default memo(ShowTodo)