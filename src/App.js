import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
