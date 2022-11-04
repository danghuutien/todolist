import { memo, useCallback } from "react"

const CountTodo = ({todos})=>{
    

    // const complete = useCallback(todos.filter((todo) => todo.checked === true), [])
    return (
        <div className="flex justify-between py-2 mx-5">
            <p>{todos.length} tasks</p>
            <p>{todos.filter((todo) => todo.checked === true).length} complete</p>
            <p>{todos.filter((todo) => todo.checked === false).length} open</p>
        </div>
        
    )
}

export default memo(CountTodo)