import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { propTypes } from "react-bootstrap/esm/Image";

function Add(props) {
  const [formValues, changeFormValues] = useState({
    id: 0,
    description: "",
    count: ""
  });
  const handleChange = (event) => {
    const newState = { ...formValues };
    if (event.target.name === "completed") {
      newState[event.target.name] = !formValues.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeFormValues(newState);
  };
  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    props.onSubmit(formValues.id, formValues.description, formValues.count);
    toastr["success"] ("Todo added", "Success")
    changeFormValues({
      id: 0,
      description: "",
      count: ""
    });
  };

  return (
    <div>
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Group controlId="taskID">
          <Form.Label> User Name</Form.Label>
          <Form.Control
            name="id"
            type="number"
            value={formValues.id}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label> Post</Form.Label>
          <Form.Control
            name="description"
            type="text"
            value={formValues.description}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="taskCounter">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            name="count"
            type="text"
            value={formValues.count}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;