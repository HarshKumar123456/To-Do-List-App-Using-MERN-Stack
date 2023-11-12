import React, { useState } from "react";
import "../componentCSS/editToDo.css";

function EditTodos(props) {
    const [todo, setTodo] = useState({ todoId: props.todoId, todoNewTitle: "", todoNewDescription: "" });

    async function handleChange(e) {
        setTodo((prevToDo) => {
            return ({ ...prevToDo, [e.target.name]: e.target.value });
        });
    }

    async function handleEditButtonClick(event) {
        props.onSubmit(todo);
        event.preventDefault();
    }

    return <div className="container update-to-do-container">
        <form className="d-flex flex-column gap-2 m-4">
            <input type="hidden" name="userId" value={props.todoId} />
            <input type="text" onChange={handleChange} name="todoNewTitle" placeholder="Enter To Do's Title like : Buy Milk" required />
            <input type="text" onChange={handleChange} name="todoNewDescription" placeholder="Enter To Do's Description like : Buy AMUL milk for Baby" />
            <button className="btn btn-outline-light" onClick={handleEditButtonClick}>Update To Do</button>
        </form>
    </div>;
}

export default EditTodos;