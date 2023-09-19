import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Users from "./components/Users.jsx";
import UserDeatails from "./components/UserDeatails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/users",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element:<Users></Users>
      },
      {
        path:"/users/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDeatails></UserDeatails>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
