const TodoItem = ({ task, handleDeleteTask, handleCompleteTask }) => {
  return (
    <>
      <div
        className={`d-flex justify-content-between  align-items-center bg-black ${
          task?.isCompleted ? "bg-opacity-25" : "bg-opacity-50"
        } p-3 my-3 rounded-3 `}
      >
        <input
          onChange={() => handleCompleteTask(task?.id)}
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
