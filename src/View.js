import React from "react";
import Table from "react-bootstrap/Table";
import "./App.css";
import Likes from "./Likes";

function View(props) {
  const buildRows = () => {
    return props.todos.map((current) => (
      <tr key={current.id}>
        <td>{current.id}</td>
        <td>{current.description}</td>
        <td>{current.count}</td>
        <tr>{Likes()}</tr>
        
        
      </tr>
 
      
    ));
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Post</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>{buildRows()}</tbody>
      </Table>
    </>
  );
}
export default View;