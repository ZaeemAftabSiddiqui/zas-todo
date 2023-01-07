import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    }
    props.addTodo(title, desc);
  };

  return (
    <Form className="container my-3" onSubmit={submit}>
      <h3>Add a todo</h3>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Todo title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control
          type="text"
          value={desc}
          placeholder="description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};

export default AddTodo;
