import React from "react";
import "../componentCSS/toDoCard.css";

function ToDoCard(props) {
    return <div className="container to-do-card">
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
            <button type="button" className="btn edit-button">
                <img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/edit.png" alt="edit" />
            </button>
        </div>
    </div>;
}

export default ToDoCard;