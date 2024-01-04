import { useState } from "react";
import FormAddTask from "./components/FormAddTask";
import TodosList from "./components/TodosList";

function App() {
  const [todosArr, setTodosArr] = useState([]);

  return (
    <>
      <FormAddTask setTodosArr={setTodosArr} />
      <TodosList todosArr={todosArr} />
    </>
  );
}

export default App;
