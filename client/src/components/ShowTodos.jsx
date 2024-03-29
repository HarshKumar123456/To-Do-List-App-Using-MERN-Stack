import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoCard from "./ToDoCard";
import NotRegistered from "./NotRegistered";
import CreateTodo from "./CreateTodo";

function ShowTodos() {
    const [isUserIsRegistered, setRegisteredStatus] = useState(false);
    // eslint-disable-next-line
    const [user, setUser] = useState();
    const [userId, setUserId] = useState("");
    // eslint-disable-next-line
    const [userToDos, setToDos] = useState(null);
    // eslint-disable-next-line
    const [todosFetched, setTodoFetchedStatus] = useState(false);

    const [createBoxOpened, setCreateBoxOpenedStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!isUserIsRegistered) {
                    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/getUser`, { withCredentials: true });
                    if (response.data) {
                        setUser(response.data);
                        setUserId(response.data._id);
                        setRegisteredStatus(true);
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUser("User not found");
                setUserId("User not Found to kahe ki id");
                setRegisteredStatus(false);
            }
        };

        fetchData(); // Always fetch user data on component mount



    }, [isUserIsRegistered]); // Run this effect only when isUserIsRegistered changes

    async function fetchToDos() {
        try {
            if (isUserIsRegistered) {
                const todosResponse = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/ourToDoApi/todo/${userId}`,
                    { withCredentials: true }
                );
                setToDos(todosResponse.data);
                setTodoFetchedStatus(true);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            setToDos(null);
        }
    };

    async function createToDos(todoToBeAdded) {
        try {
            const newTodosResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/ourToDoApi/todo/${todoToBeAdded.userId}`, todoToBeAdded, { withCredentials: true });
            console.log(newTodosResponse);
            setToDos(newTodosResponse.data.data);
        }
        catch (error) {
            console.error("Error fetching user data:", error);
            setToDos(null);
        }
    }

    async function editToDo(todoToBeUpdated) {
        try {
            const afterUpdateTodosResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}/ourToDoApi/todo/${userId}`, { ...todoToBeUpdated, userId: userId }, { withCredentials: true });
            console.log(afterUpdateTodosResponse);
            setToDos(afterUpdateTodosResponse.data.data);
        }
        catch (error) {
            console.error("Error fetching user data:", error);
            setToDos(null);
        }
    }

    async function deleteToDo(idOfToDo) {
        try {
            const afterDeleteToDoResponse = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/ourToDoApi/todo/${userId}?toDoId=${idOfToDo}`, { withCredentials: true });
            console.log(afterDeleteToDoResponse.data);
            setToDos(afterDeleteToDoResponse.data.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
            setToDos(null);
        }
    }


    async function handleShowButtonClick() {
        console.log("Show button is clicked ");
        await fetchToDos();
        console.log("Show button is clicked function ended");
    }

    async function handleDeleteButtonClick(idOfToDo) {
        console.log("Delete button is clicked ");
        await deleteToDo(idOfToDo);
        console.log("Delete button is clicked function ended");
    }

    async function handleEditButtonClick(updatedTodo) {
        console.log("Edit button is clicked ");
        await editToDo(updatedTodo);
        console.log("Edit button is clicked function ended");
    }

    async function handleCreateButtonClick() {
        console.log("Create button is clicked ");
        setCreateBoxOpenedStatus(!createBoxOpened);
        console.log("Create button is clicked function ended");
    }

    return (
        <div>
            {isUserIsRegistered ? (
                <div className="main-to-do-container">
                    {createBoxOpened && <CreateTodo userId={userId} onSubmit={createToDos} />}
                    <div className="container">
                        {/* Bhai user is: {userId} */}
                        <div className="d-flex">
                            <div className="container d-flex">
                                <p>{user.username}'s Todos</p>
                                <button type="button" className="btn show-to-do-button" onClick={handleShowButtonClick}>
                                    <img width="48" height="48" src="https://img.icons8.com/arcade/64/preview-pane.png" alt="preview-pane" />
                                </button>

                            </div>
                            <div className="container d-flex">

                                <p>Create New Todo</p>
                                <button type="button" className="btn show-to-do-button" onClick={handleCreateButtonClick}>
                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/plus-math.png" alt="plus-math" />
                                </button>
                            </div>
                        </div>

                    </div>
                    {(userToDos && userToDos.length === 0) && (<div className="container no-to-dos-message-container m-2 p-2"><h2>You Have no To Dos for Now....</h2></div>)}
                    {userToDos && userToDos.map((todo) => (
                        <ToDoCard
                            key={todo._id}
                            id={todo._id}
                            title={todo.title}
                            description={todo.description}
                            onDelete={handleDeleteButtonClick}
                            onEdit={handleEditButtonClick}
                        />
                    ))}
                </div>
            ) : (
                <NotRegistered />
            )}
        </div>
    );
}

export default ShowTodos;
