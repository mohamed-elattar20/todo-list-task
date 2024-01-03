import { useState } from "react";

const FormAddTask = () => {
  const [taskInputVal, setTaskInputVal] = useState("");
  const [inputError, setInputError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInputVal) {
      setInputError("Please Enter A valid task");
      return;
    }
    console.log(taskInputVal);
    setTaskInputVal("");
    setInputError("");
  };
  return (
    <>
      <div className="container my-5 text-center ">
        <h1 className="mb-3">Todo List</h1>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-9">
            <form
              onSubmit={handleSubmit}
              className="d-flex align-items-center justify-content-between  "
            >
              <input
                value={taskInputVal}
                onChange={(e) => setTaskInputVal(e.target.value)}
                className="form-control w-75  "
                type="text"
                placeholder="Add Task"
              />
              <button className="btn btn-primary w-25 mx-3 ">Add task</button>
            </form>
            {inputError && (
              <p className="text-start mt-2 text-danger fw-bold ">
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
