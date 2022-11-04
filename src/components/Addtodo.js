import { memo, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Addtodo = ({onHandleTodos}) => {
    const [title, setTitle] = useState("")
    const onSetTitle = useCallback((e)=>{
        setTitle(e.target.value)
    }, [])

    console.log(title)

    const handleTodo = useCallback(()=>{
        if (!title) {
            alert("Bạn phải nhập trường này rồi mới click");
            return;
        } else {
            let newTodo = {
                id: uuidv4(),
                title: title,
                checked: false,
            };
            onHandleTodos((prevTodo)=>[...prevTodo, newTodo]);
            setTitle('')
        }
    })

    
    return (

        <div className="flex justify-between"
                style={{borderBottom: "1px solid gray", color: "gray"}}
        >
        <input value={title} onChange={onSetTitle}
                className="p-2 w-3/4 focus-visible:outline-none "
                type="text"
                placeholder="Add tack...."
        />
        <i  
            onClick={handleTodo}
            className="cursor-pointer fa-regular fa-pen-to-square p-2 pr-5"
        ></i>
        </div>
    )
};

export default memo(Addtodo);
