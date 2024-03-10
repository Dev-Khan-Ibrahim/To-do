import { useState } from "react";
import "./App.css";
import Inputfile from "./Compnent/Inputfile";
import Todolist from "./Compnent/Todolist";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (newtodo) => {
    setTodos([...todos, { text: newtodo, done: false }]);
  };
  const deleteTodo = (index) => {
    // Create a copy of todos without the todo at the specified index
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  const markAsDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = true;
    setTodos(updatedTodos);
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">😎you have do😎</span>
      <Inputfile todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} markAsDone={markAsDone}  />
    </div>
  );
};

export default App;
