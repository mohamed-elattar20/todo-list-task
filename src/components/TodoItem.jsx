const TodoItem = ({ task, handleDeleteTask, handleCompleteTask }) => {
  return (
    <>
      <div
        className={`d-flex justify-content-between  align-items-center bg-success ${
          task?.isCompleted ? "bg-opacity-50" : "bg-opacity-10"
        } p-3 my-3 rounded-3 `}
      >
        <input
          checked={task?.isCompleted}
          value={task?.isCompleted}
          onChange={(e) => {
            console.log(e.target.value);
            handleCompleteTask(task?.id);
          }}
          className="form-check-input"
          type="checkbox"
        />
        <p
          className={`lead m-0 text-start ${
            task?.isCompleted ? "text-decoration-line-through" : ""
          }`}
        >
          {task?.task}
        </p>
        <button
          onClick={() => handleDeleteTask(task?.id)}
          className="btn btn-danger "
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoItem;
