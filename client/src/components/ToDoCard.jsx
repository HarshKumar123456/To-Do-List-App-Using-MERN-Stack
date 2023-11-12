import React, { useState } from "react";
import "../componentCSS/toDoCard.css";
import EditTodos from "./EditTodo";

function ToDoCard(props) {

    const [editButtonClicked,setEditButtonClickedStatus] = useState(false);
    // { userId: props.userId,todoId: props.todoId, todoNewTitle: "", todoNewDescription: "" }

    async function handleEditClick(){
        setEditButtonClickedStatus(!editButtonClicked);
    }

    async function updateRecordedAndSubmitted(updatedTodo){
        props.onEdit(updatedTodo);
        setEditButtonClickedStatus(!editButtonClicked);
    }

    return <div className="container to-do-card">
        {editButtonClicked && <EditTodos 
            todoId = {props.id}
            todoTitle = {props.title}
            todoDescription = {props.description}
            onSubmit = {updateRecordedAndSubmitted}
        />}
        <div className="to-detail-container">
            <div className="to-do-title">
                <h2>{props.title}</h2>
            </div>
            <div className="to-do-description">
                <p>{props.description}</p>
            </div>
        </div>
        <div className="button-container d-flex">

            <button type="button" className="btn delete-button"  onClick={() => {
                props.onDelete(props.id);
            }}>
                <img width="40" height="40" src="https://img.icons8.com/arcade/64/recycle-bin.png" alt="recycle-bin" />
            </button>
            <button type="button" className="btn edit-button" onClick={handleEditClick}>
                <img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/edit.png" alt="edit" />
            </button>
        </div>
    </div>;
}

export default ToDoCard;