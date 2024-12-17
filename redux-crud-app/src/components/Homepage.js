import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../redux/actions";
import { Link } from "react-router-dom";

const Homepage = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Homepage - CRUD List</h2>
      <Link to="/form" className="btn btn-primary mb-3">
        Add New Entry
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link
                  to={`/form/${item.id}`}
                  className="btn btn-warning btn-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
//
// ffg