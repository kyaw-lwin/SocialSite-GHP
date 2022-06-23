import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import View from "./View";
import Add from "./Add";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";

function App() { 
  const [todos, changeTodos] = useState([])
  const updateTodoItems = (id, description, count) => {
    const item = { id, description, count };
    localStorage.setItem("list", JSON.stringify([...todos, item]))
    changeTodos((state) => [...state, item]);
  };

  useEffect (() => {
    const listContents = localStorage.getItem("list");
    changeTodos(JSON.parse(listContents)||[])
  }, [])
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Meet Friends</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/view">
              View
            </Link>
            <Link className="nav-link" to="/add">
              Post
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<View todos={todos} />} />
        <Route path="/view" element={<View todos={todos} />} />
        <Route
          path="/add"
          element={
            <Add onSubmit={(id, description, count) => updateTodoItems(id, description, count)}/>
          }
        />
      </Routes>
    </Container>
  );
}
export default App;