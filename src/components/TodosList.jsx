import TodoItem from "./TodoItem";

const TodosList = () => {
  const data = [
    { id: 1, name: "task1", completed: false },
    { id: 2, name: "task2", completed: false },
    { id: 3, name: "task3", completed: false },
    { id: 4, name: "task4", completed: false },
  ];
  return (
    <>
      <div className="contianer">
        <div className="row justify-content-center ">
          <div className="col-sm-12 col-md-9">
            {data.map((task) => (
              <TodoItem key={task.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosList;
