import React from "react";
import "../componentCSS/toDoCard.css";

function ToDoCard(props) {
    return <div class="container to-do-card">
        <div class="to-detail-container">
            <div class="to-do-title">
                <h2>{props.title}</h2>
            </div>
            <div class="to-do-description">
                <p>{props.description}</p>
            </div>
        </div>
        <div class="button-container">

            <button type="button" class="btn delete-button">
                <img width="40" height="40" src="https://img.icons8.com/arcade/64/recycle-bin.png" alt="recycle-bin" />
            </button>
            <button type="button" class="btn edit-button">
                <img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/edit.png" alt="edit" />
            </button>
        </div>
    </div>;
}

export default ToDoCard;