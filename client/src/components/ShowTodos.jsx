import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoCard from "./ToDoCard";
import NotRegistered from "./NotRegistered";

function ShowTodos() {
    const [isUserIsRegistered, setRegisteredStatus] = useState(false);
    // eslint-disable-next-line
    const [user, setUser] = useState();
    const [userId, setUserId] = useState("");
    // eslint-disable-next-line
    const [userToDos, setToDos] = useState([]);
    // eslint-disable-next-line
    const [todosFetched, setTodoFetchedStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!isUserIsRegistered) {
                    const response = await axios.get('http://localhost:3000/getUser', { withCredentials: true });
                    if (response.data) {
                        setUser(response.data);
                        setUserId(response.data._id);
                        setRegisteredStatus(true);

                        // Fetch todos only if the user is registered
                        const todosResponse = await axios.get(
                            `http://localhost:3000/ourToDoApi/todo/${response.data._id}`,
                            { withCredentials: true }
                        );
                        setToDos(todosResponse.data);
                        setTodoFetchedStatus(true);
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

    return (
        <div>
            {isUserIsRegistered ? (
                <div className="main-to-do-container">
                    Bhai user is: {userId}
                    {userToDos.map((todo) => (
                        <ToDoCard
                            key={todo._id}
                            id={todo._id}
                            title={todo.title}
                            description={todo.description}
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
