import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const addForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchUsers = () => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("User added successfully!");
        fetchUsers();
        setFormData({ id: "", name: "", email: "" });
      })
      .catch((error) => console.log(error));
  };

  const updateUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        alert("User updated successfully!");
        fetchUsers();
        setFormData({ id: "", name: "", email: "" });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-3">
      <form className="d-flex flex-column">
        <input
          type="text"
          value={formData.id}
          name="id"
          onChange={addForm}
          placeholder="Enter id"
          className="m-2"
        />
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={addForm}
          placeholder="Enter name"
          className="m-2"
        />
        <input
          type="text"
          value={formData.email}
          name="email"
          onChange={addForm}
          placeholder="Enter email"
          className="m-2"
        />
        <div>
          <button className="btn btn-warning m-2" onClick={addUser}>
            Add
          </button>
          <button className="btn btn-success m-2" onClick={updateUser}>
            Update
          </button>
        </div>
      </form>

      <h2>User Info:</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
