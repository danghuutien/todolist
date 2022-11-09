import { memo, useCallback, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const Addtodo = ({onHandleTodos, inputEl}) => {

    console.log('Addtodo')
    const [title, setTitle] = useState("")

    const onSetTitle = useCallback((e)=>{
        setTitle(e.target.value)
    }, [])

    

    const handleTodo = useCallback(()=>{
        onHandleTodos && onHandleTodos(title)
        setTitle('')
        inputEl.current.focus();
    }, [title, onHandleTodos])

    
    return (

        <div className="flex justify-between"
                style={{borderBottom: "1px solid gray", color: "gray"}}
        >
        <input ref={inputEl} value={title} onChange={onSetTitle}
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
