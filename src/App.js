import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";

function App() {
  let todos = [
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
  ];
  return (
    <div className="App">
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
