import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  async function getTodos() {
    const todoResponse = await fetch(
      `https://jsonplaceholder.typicode.com/todos`
    );
    const todoData = await todoResponse.json();
    console.log(todoData);
    setTodo(todoData);
    document.querySelector(".todoList").classList.remove("hide");
  }

  return (
    <div className="App">
      <div className="upperArea">
        <h1>TODO</h1>
        <h3>
          Get a TODO items by clicking a <strong>Get TODOs</strong> button
        </h3>
        <button onClick={getTodos}>Get TODOs</button>
      </div>
      <div className="todoList hide">
        <ShowTodoItems todo={todo} />
      </div>
    </div>
  );
}

function ShowTodoItems({ todo }) {
  return (
    <ul>
      {todo.map((todoItem) => (
        <li>{todoItem.title}</li>
      ))}
    </ul>
  );
}
