const TodoItem = () => {
  return (
    <>
      <div className="d-flex justify-content-between  align-items-center bg-black bg-opacity-25 p-3 my-3 rounded-3  ">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
        />
        <p className="lead m-0 text-start ">task Name</p>
        <button className="btn btn-danger ">Delete</button>
      </div>
    </>
  );
};

export default TodoItem;
