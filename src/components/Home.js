import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const userData = useLoaderData();
  return (
    <div>
      <h2>All User: {userData.length}</h2>
      <table id="customers">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        {userData.map((user) => (
          <tbody key={user._id}>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
