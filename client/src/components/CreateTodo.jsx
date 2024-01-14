import React,{useState} from "react";

function CreateTodo(props){
    const [todo,setTodo] = useState({userId: props.userId,todoNewTitle: "",todoNewDescription: ""});

    async function handleChange(e){
        setTodo((prevToDo) => {
            return ({...prevToDo,[e.target.name]: e.target.value});
        });
    }

    async function handleAddButtonClick(event){
        props.onSubmit(todo);
        event.preventDefault();
    }

    return <div className="conatiner create-todo-container">
            <form className="d-flex flex-column gap-2 m-4">
                <input type="hidden" name="userId" value={props.userId}/>
                <input type="text" onChange={handleChange} name="todoNewTitle" value={todo.todoNewTitle} placeholder="Enter To Do's Title like : Buy Milk"required/>
                <input type="text" onChange={handleChange} name="todoNewDescription" value={todo.todoNewDescription} placeholder="Enter To Do's Description like : Buy AMUL milk for Baby"/>
                <button className="btn btn-outline-success" onClick={handleAddButtonClick}>Add To Do</button>
            </form>
    </div>;
}

export default CreateTodo;