import { useState } from "react";
import FormAddTask from "./components/FormAddTask";
import TodosList from "./components/TodosList";
import Filter from "./components/Filter";

function App() {
  const [todosArr, setTodosArr] = useState([]);

  const [filterValue, setFilterValue] = useState("all");

  let filterdTodosArr;

  if (filterValue === "all") filterdTodosArr = todosArr;
  if (filterValue === "completed")
    filterdTodosArr = todosArr.filter((todo) => todo.isCompleted === true);
  if (filterValue === "not-completed")
    filterdTodosArr = todosArr.filter((todo) => todo.isCompleted !== true);

  const handleAddTask = (newTask) => {
    setTodosArr((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTodosArr((prev) => prev.filter((todo) => todo.id !== taskId));
  };

  const handleCompleteTask = (taskId) => {
    setTodosArr((prev) =>
      prev.map((todo) =>
        todo.id === taskId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const handleEditTask = (taskId, editedTask) => {
    setTodosArr((prev) =>
      prev.map((todo) =>
        todo.id === taskId ? { ...todo, task: editedTask } : todo
      )
    );
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="mb-2 display-3 text-center">Todo List</h1>
      </div>
      <Filter
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        options={[
          { value: "all", label: "All Tasks" },
          { value: "completed", label: "Completed Tasks" },
          { value: "not-completed", label: "Not Completed Tasks" },
        ]}
      />
      <FormAddTask handleAddTask={handleAddTask} />
      <TodosList
        handleEditTask={handleEditTask}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        todosArr={filterdTodosArr}
      />
    </>
  );
}

export default App;
