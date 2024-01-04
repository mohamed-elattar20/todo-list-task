import { useState } from "react";
import FormAddTask from "./components/FormAddTask";
import TodosList from "./components/TodosList";

function App() {
  const [todosArr, setTodosArr] = useState([]);

  console.log(todosArr);

  const handleAddTask = (newTask) => {
    setTodosArr((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTodosArr((prev) => prev.filter((todo) => todo.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTodosArr((prev) =>
      prev.map((todo) => {
        if (todo.id === taskId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <FormAddTask handleAddTask={handleAddTask} />
      <TodosList
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        todosArr={todosArr}
      />
    </>
  );
}

export default App;
