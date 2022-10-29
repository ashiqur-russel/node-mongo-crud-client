import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => {
        return fetch("http://localhost:5000/user");
      },
      element: <Home></Home>,
    },
    {
      path: "users/add",
      element: <AddUser></AddUser>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
