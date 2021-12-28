import React, { useState } from "react";
import { useToDoLayerValue } from "./context/ToDoContext";
import TodoList from "./components/TodoList";
import "./App.css";
const App = () => {
  const [{ todos }, dispatch] = useToDoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content && content.length < 1) return;
    const newTodo = {
      id: Math.floor(Math.random() * 613215),
      content: content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setContent("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          type="text"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <button className="todo-button">Add</button>
      </form>
      {/*  Todo list */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
