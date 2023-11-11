import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Navbar from "./components/NavBar";
import ShowTodos from "./components/ShowTodos";
import CreateTodo from "./components/CreateTodo";
import HomePage from "./components/HomePage";
import EditTodos from "./components/EditTodo";
import DeleteTodos from "./components/DeleteTodo";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/view" element={<div className="home-page"><ShowTodos /></div>} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/edit" element={<EditTodos />} />
          <Route path="/delete" element={<DeleteTodos />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
