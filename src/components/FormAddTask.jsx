import { useRef, useState } from "react";

const FormAddTask = ({ handleAddTask }) => {
  const [taskInputVal, setTaskInputVal] = useState("");
  const [inputError, setInputError] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInputVal) {
      setInputError("Please Enter A valid task");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      task: taskInputVal,
      isCompleted: false,
    };

    handleAddTask(newTask);

    console.log(taskInputVal);
    inputRef.current.focus();
    setTaskInputVal("");
    setInputError("");
  };
  return (
    <>
      <div className="container my-5  ">
        <h1 className="mb-5 display-3 text-center">Todo List</h1>
        <div className="row justify-content-center ">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center   "
            >
              <input
                ref={inputRef}
                value={taskInputVal}
                onChange={(e) => setTaskInputVal(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Add Task"
              />
              <button className="btn btn-primary mx-3">Add task</button>
            </form>
            {inputError && (
              <p className="text-start mt-1 text-danger fw-bold ">
                {inputError}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddTask;
