import React from "react";
import Container from "react-bootstrap/Container";
import TodoItems from "./TodoItems";

const Todos = (props) => {
  return (
    <div>
      <Container>
        <h3>Todos List</h3>
        {props.todos.length === 0
          ? "No todos display"
          : props.todos.map((todo) => {
              return (
                <TodoItems
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </Container>
    </div>
  );
};

export default Todos;
