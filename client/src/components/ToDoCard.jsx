import React from "react";
import "../componentCSS/toDoCard.css";

function ToDoCard() {
    return <div class="container to-do-card">
        <div class="to-detail-container">
            <div class="to-do-title">
                <h2>To Do Title</h2>
            </div>
            <div class="to-do-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod reiciendis dignissimos, eum neque dicta libero magnam quo veritatis consectetur maxime beatae laborum, tempore recusandae amet, deleniti deserunt eveniet dolorem doloremque. Corporis quo atque alias aspernatur consequuntur voluptate natus vero obcaecati.</p>
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