import React from "react";
import Container from "react-bootstrap/Container";
import TodoItems from "./TodoItems";

const Todos = (props) => {
  return (
    <div>
      <Container>
        <h3>Todos List</h3>
        {props.todos.map((todo) => {
          return <TodoItems todo={todo} />;
        })}
      </Container>
    </div>
  );
};

export default Todos;
