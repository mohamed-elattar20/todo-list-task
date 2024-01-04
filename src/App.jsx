import { useState } from "react";
import FormAddTask from "./components/FormAddTask";
import TodosList from "./components/TodosList";

function App() {
  const [todosArr, setTodosArr] = useState([]);

  const handleAddTask = (newTask) => {
    setTodosArr((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTodosArr((prev) => prev.filter((todo) => todo.id !== taskId));
  };

  return (
    <>
      <FormAddTask handleAddTask={handleAddTask} />
      <TodosList handleDeleteTask={handleDeleteTask} todosArr={todosArr} />
    </>
  );
}

export default App;
