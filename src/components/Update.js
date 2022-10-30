import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User updated");
        }
      });
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(newUser);
  };
  return (
    <div>
      <h2>Update {storedUser.name}'s Info</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          defaultValue={storedUser.name}
          placeholder="Name"
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="address"
          defaultValue={storedUser.address}
          placeholder="Address"
          required
        />
        <br />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          defaultValue={storedUser.email}
          placeholder="Email"
          required
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
