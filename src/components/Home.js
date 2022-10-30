import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const userData = useLoaderData();
  const [displayUser, setDisplayUser] = useState(userData);
  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${user.name}`
    );
    if (agree) {
      //console.log("Deleteing user with id ", user._id);
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("User deleted Successfully");
            const remainingUsers = displayUser.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUser(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h2>All User: {displayUser.length}</h2>
      <table id="customers">
        <thead>
          <tr className="t_head">
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        {displayUser.map((user) => (
          <tbody key={user._id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="button_dlt"
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </button>
                <Link to={`/update/${user._id}`}>
                  <button className="button_update">Update</button>
                </Link>{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
