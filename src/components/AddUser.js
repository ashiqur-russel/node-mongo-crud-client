import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "default",
    email: "d@gmail.com",
  });

  const handleAddUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        alert("User added successfully");
      })
      .catch((err) => {
        console.log("Error:", err);
      });

    event.target.reset();
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(newUser);
  };

  return (
    <div>
      <h2>Please add a new User</h2>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
