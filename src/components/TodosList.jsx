import TodoItem from "./TodoItem";

const TodosList = ({ todosArr, handleDeleteTask, handleCompleteTask }) => {
  //   const data = [
  //     { id: 1, name: "task1", completed: false },
  //     { id: 2, name: "task2", completed: false },
  //     { id: 3, name: "task3", completed: false },
  //     { id: 4, name: "task4", completed: false },
  //   ];
  return (
    <>
      <div className="contianer mb-5">
        <div className="row justify-content-center m-0">
          {todosArr.map((task) => (
            <div key={task?.id} className="col-sm-12 col-md-9">
              <TodoItem
                handleCompleteTask={handleCompleteTask}
                handleDeleteTask={handleDeleteTask}
                task={task}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodosList;
