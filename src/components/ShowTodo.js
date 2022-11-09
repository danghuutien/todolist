import { memo } from "react"

const ShowTodo = ({title, id, checked, onHandleDeleteTodo, onHandleChecked})=>{
    
    // console.log('ShowTodo')
    const onDelete = ()=>{
        onHandleDeleteTodo && onHandleDeleteTodo(id)
    }
    
    const onCheck = ()=>{
        onHandleChecked && onHandleChecked(id)
    }
    return (
        <li style={{borderBottom:'1px solid gray'}} className="flex justify-between mt-5 py-2" >
            <div>
                <input onChange={onCheck} id={id} type="checkbox"  style={{cursor:'pointer'}}/>
                <label htmlFor={id} style={checked ? {textDecoration: 'line-through'}:{}}  
                        className="ml-2.5">{title}</label>
            </div>
            <i onClick={onDelete} className="fa-solid fa-trash cursor-pointer mr-5"></i>
        </li>
    )
}

export default memo(ShowTodo)