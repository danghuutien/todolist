export const CountTodo = ({todos})=>{
    return (
        <div className="flex justify-between py-2">
                <p>{todos.length} tasks</p>
                <p>{todos.filter((todo) => todo.checked === true).length} complete</p>
                <p>{todos.filter((todo) => todo.checked === false).length} open</p>
            </div>
    )
}