import React, { useState } from "react";

const Table = ({ taskList, switchTask, handleOnDelete }) => {
  const [toDelete, setToDelete] = useState([]);
  const entryList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      if (value === "allEntry") {
        const allItems = entryList.map((item) => item._id);
        setToDelete([...toDelete, ...allItems]);
        return;
      }
      setToDelete([...toDelete, value]);
    } else {
      const deletedIds = toDelete.filter((_id) => _id !== value);
      setToDelete(deletedIds);
    }
    console.log(checked, value);
  };
  console.log(toDelete);

  //   const totalBadHr =
  return (
    <div className="row mt-5">
      <div className="col-md text-center">
        <h3>Entry List</h3>
        <hr />
        <input
          type="checkbox"
          value="allEntry"
          id="all-entry"
          onClick={handleOnSelect}
        />
        <label htmlFor="all-entry">Select All</label>
        <table className="table table-striped table-hover border shadow-lg">
          <tbody id="entryList">
            {entryList.map((item, i) => {
              return (
                <tr key={item?._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="d-flex align-items-center ">
                      <input
                        onClick={handleOnSelect}
                        className="form-check-input me-3 "
                        type="checkbox"
                        value={item?._id}
                      />
                      {item.task}
                    </div>
                  </td>

                  <td>{item.hours}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleOnDelete(item._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button
                      onClick={() => switchTask(item._id, "bad")}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col text-center">
        <h3>Bad List</h3>
        <hr />
        <input
          type="checkbox"
          value="allBad"
          id="all-bad"
          onClick={handleOnSelect}
        />
        <label htmlFor="allBad">Select All</label>
        <table className="table table-striped table-hover border shadow-lg">
          <tbody id="badlist">
            {badList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="d-flex align-items-center ">
                      <input
                        onClick={handleOnSelect}
                        className="form-check-input me-3 "
                        type="checkbox"
                        value={item?._id}
                        id=""
                      />
                      {item.task}
                    </div>
                  </td>
                  <td>{item.hours}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleOnDelete(item._id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button
                      onClick={() => switchTask(item._id, "entry")}
                      className="btn btn-warning"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="alert alert-success">
          You could have saved {badList.reduce((acc, i) => acc + i.hours, 0)}
          <span id="savedhours"></span>
          hours
        </div>
      </div>
    </div>
  );
};

export default Table;
