import { useState } from "react";
import { HiMiniTrash, HiArrowUpOnSquareStack } from "react-icons/hi2";

const TodoItem = ({
  task,
  handleDeleteTask,
  handleCompleteTask,
  handleEditTask,
}) => {
  const [isEditSession, setIsEditSession] = useState(false);

  const [editedTask, setEditedTask] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedTask) return;
    handleEditTask(task.id, editedTask);
    setIsEditSession(false);
  };

  return (
    <>
      <div
        className={`d-flex justify-content-between  align-items-center bg-secondary ${
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
        {!isEditSession && (
          <p
            className={`lead m-0 text-start ${
              task?.isCompleted ? "text-decoration-line-through" : ""
            }`}
          >
            {task?.task}
          </p>
        )}
        {isEditSession && (
          <form onSubmit={handleSubmit} className="w-25">
            <input
              className="form-control "
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              placeholder="Edit Task"
            />
          </form>
        )}
        <div>
          <button
            onClick={() => handleDeleteTask(task?.id)}
            className="btn btn-danger mx-2"
          >
            <HiMiniTrash />
          </button>
          <button
            onClick={() => setIsEditSession((prev) => !prev)}
            className="btn btn-info "
          >
            <HiArrowUpOnSquareStack />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
