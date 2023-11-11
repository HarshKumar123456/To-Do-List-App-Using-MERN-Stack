import React, { useEffect, useState } from "react";
import Link from "react-router-dom";
import axios from "axios";
import ToDoCard from "./ToDoCard";
import NotRegistered from "./NotRegistered";

function ShowTodos() {
    const [isRegistered, setRegiteredStatus] = useState(false);
    const [user, setUser] = useState();
    const [userId, setUserId] = useState("");
    // const [userToDos,setToDos] = useState([]);
    var userToDos = [1,2];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getUser', { withCredentials: true });
                if (response.data) {
                    setUser(response.data);
                    setUserId(response.data._id);
                    setRegiteredStatus(true);
                }
            } catch (error) {
                // Handle the error here
                console.error("Error fetching user data:", error);
                setUser("User not found");
                setUserId("User not Found to kahe ki id");
                setRegiteredStatus(false);
            }
        };

        fetchData();
    }, []);


    console.log(user);
    var userToDos = [1, 2];
    console.log(userId);
    return <div>
        {isRegistered ? (<div className="main-to-do-container">
            Bhai user is : {userId}
            {userToDos.map((todo) => {
                return <ToDoCard />;
            })}
        </div>) : (<NotRegistered />)}
    </div>;
}

export default ShowTodos;