import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, updateData } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

const FormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const existingItem = id
    ? data.find((item) => item.id === parseInt(id))
    : null;

  const [formData, setFormData] = useState({
    id: existingItem ? existingItem.id : Date.now(),
    name: existingItem ? existingItem.name : "",
    email: existingItem ? existingItem.email : "",
  });

  useEffect(() => {
    if (existingItem) {
      setFormData(existingItem);
    }
  }, [existingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateData(formData));
    } else {
      dispatch(addData(formData));
    }
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>{id ? "Edit Entry" : "Add New Entry"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
