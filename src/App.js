import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddTodo from "./Components/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete o todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo)
    // todos.splice(index,1 )

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get vegetables ",
    },
    {
      sno: 2,
      title: "Go to the super market",
      desc: "You need to go to the super market to get vegetables ",
    },
    {
      sno: 3,
      title: "Go to the mall",
      desc: "You need to go to the mall to get vegetables ",
    },
  ]);
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
