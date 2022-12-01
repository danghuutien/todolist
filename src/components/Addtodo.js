import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import todosSlice from "../redux/todosSlice";
import axios from "axios";


// console.log(todosSlice)
const Addtodo = ({inputEl}) => {
    // console.log('Addtodo')
    const dispatch = useDispatch();
    const [title, setTitle] = useState("")

    const onSetTitle = useCallback((e)=>{
        setTitle(e.target.value)
    }, [])

    const handleTodo = useCallback(()=>{
        if(title == ''){
            alert('trường này bắt buộc nhập')
        }else{

            axios.post('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist', 
            {
                title: title,
                checked: false,
            })
            .then((res)=>{
                // console.log(res.data)
                dispatch(
                    todosSlice.actions.addTodo({
                        id: res.data.id,
                        title: res.data.title,
                        checked: res.data.checked,
                })
                )
                
            })
    
    
            setTitle('')
            inputEl.current.focus();
        }
    },[title])


    useEffect(()=>{
        axios.get('https://637dc8f3cfdbfd9a639ca370.mockapi.io/todolist')
        .then((res)=>{
            // console.log(res.data)
            dispatch(
                todosSlice.actions.setInit(res.data)
            )
        })
    },[])


    return (

        <div className="flex justify-between"
                style={{borderBottom: "1px solid gray", color: "gray"}}
        >
        <input ref={inputEl} value={title} onChange={onSetTitle}
                className="p-2 w-3/4 focus-visible:outline-none "
                type="text"
                placeholder="Add tack...."
        />
        <button  
            onClick={handleTodo}
            className="cursor-pointer fa-regular fa-pen-to-square p-2 pr-5"
        ></button>
        </div>
    )
};

export default memo(Addtodo);
