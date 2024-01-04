const Filter = ({ options, filterValue, setFilterValue }) => {
  return (
    <>
      <div className="container mt-5  text-start">
        <div className="row m-0 justify-content-end">
          <div className="col-sm-12 col-md-9 col-lg-9 d-flex justify-content-end">
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="form-select w-25"
              aria-label="Default select example"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
