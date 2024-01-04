import { useRef, useState } from "react";

const FormAddTask = ({ handleAddTask }) => {
  const [taskInputVal, setTaskInputVal] = useState("");
  const [inputError, setInputError] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInputVal) {
      setInputError("You can't add an empty task , try adding something");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      task: taskInputVal,
      isCompleted: false,
    };

    handleAddTask(newTask);

    // console.log(taskInputVal);
    inputRef.current.focus();
    setTaskInputVal("");
    setInputError("");
  };
  return (
    <>
      <div className="container my-5  ">
        <div className="row justify-content-center ">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center   "
            >
              <input
                ref={inputRef}
                value={taskInputVal}
                onChange={(e) => setTaskInputVal(e.target.value)}
                className="form-control "
                type="text"
                placeholder="Add Task"
              />
              <button className="btn btn-primary mx-3 w-25">Add task</button>
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
