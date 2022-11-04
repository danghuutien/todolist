import { memo, useCallback } from "react"

const ShowTodo = ({title, id, checked, onHandleDeleteTodo, onHandleChecked})=>{
    const onDelete = useCallback(()=>{
        onHandleDeleteTodo && onHandleDeleteTodo(id)
    }, [onHandleDeleteTodo])

    const onCheck = useCallback(()=>{
        onHandleChecked && onHandleChecked(id)
    }, [onHandleChecked])
    return (
        <li style={{borderBottom:'1px solid gray'}} className="flex justify-between mt-5 py-2" >
            <div>
                <input onChange={onCheck} id={id} type="checkbox" />
                <label htmlFor={id} style={checked ? {textDecoration: 'line-through'}:{}}  
                        className="ml-2.5">{title}</label>
            </div>
            <i onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></i>
        </li>
    )
}

export default memo(ShowTodo)