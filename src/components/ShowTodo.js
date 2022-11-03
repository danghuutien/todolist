export const ShowTodo = ({name, setChecked, key, checked, setDelete})=>{
    return (
                <li style={{ borderBottom: "1px solid gray" }}
                    className="flex justify-between mt-5 py-2"
                    key={key}
                >
                    <div>
                        <input type="checkbox"
                            onClick={setChecked}
                        />
                        <label
                            style={checked ? { textDecoration: "line-through" } : {}}
                            className="ml-2.5"
                        >
                            {name}
                        </label>
                    </div>
                <i
                    onClick={setDelete}
                    className="fa-solid fa-trash cursor-pointer mr-5"
                ></i>
            </li>
          
    )
}