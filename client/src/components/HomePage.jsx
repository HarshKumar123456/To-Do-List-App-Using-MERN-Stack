import React, { useState, useEffect } from "react";
import axios from "axios";

import RegisterPage from "./RegisterPage";
import "../index.css";
import ShowTodos from "./ShowTodos";

function HomePage() {
    const [isRegistered, setRegiteredStatus] = useState(false);
    const [user, setUser] = useState();
    const [userId, setUserId] = useState("");


    async function registerUser() {
        console.log("In Register user function ");
        console.log("printed data\n");
        await window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self");

    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/getUser`, { withCredentials: true });
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

    return <div className="home-page">
        {isRegistered ? <ShowTodos /> : <RegisterPage onRegister={registerUser} />}
    </div>;
}

export default HomePage;