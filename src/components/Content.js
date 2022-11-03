import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CountTodo } from "./CountTodo";

export const Content = () => {
    const [name, setName] = useState("");
    const [todos, setTodos] = useState([]);

    // let listTodo = []
    const addTodo = () => {
        if (!name) {
            alert("Bạn phải nhập trường này rồi mới click");
            return;
        } else {
            let newTodo = {
                id: uuidv4(),
                name: name,
                checked: false,
            };
            setTodos([newTodo, ...todos]);
            setName("");
        }
    };

    const handleDeleteTodo = (id)=>{
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

    return (
        <div className="bg-white p-2.5">
            <div style={{height:'380px'}} className="mx-5">
                <div className="flex justify-between" style={{borderBottom: "1px solid gray"}} >
                    <input
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    
                    className="p-2 w-3/4 focus-visible:outline-none "
                    type="text"
                    placeholder="Add tack...."
                    />
                    <i
                    onClick={addTodo}
                    className="cursor-pointer fa-regular fa-pen-to-square p-2 pr-5"
                    ></i>
                </div>

                <ul style={{height: '330px',overflowY:'scroll'}} >
                    {todos.map((todo) => (
                        <li style={{borderBottom:'1px solid gray'}} className="flex justify-between mt-5 py-2" key={todo.id}>
                            <div>
                                <input onClick={()=>{handleChecked(todo.id)}} type="checkbox" />
                                <label style={todo.checked ? {textDecoration: 'line-through'}:{}}  className="ml-2.5">{todo.name}</label>
                            </div>
                            <i onClick={() => handleDeleteTodo(todo.id)} className="fa-solid fa-trash cursor-pointer mr-5"></i>
                        </li>
                    ))}
                </ul>
            </div>

            <CountTodo todos = {todos} />

            
        </div>
  );
};
