import React from "react";
import Button from "react-bootstrap/Button";

const TodoItems = ({ todo }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <Button variant="danger" size="sm">
        Delete
      </Button>
    </div>
  );
};

export default TodoItems;
