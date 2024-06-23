import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import { ErrorPage } from "./components/ErrorPage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { Search } from "./pages/Search";
import { SingleItems } from "./pages/items/SingleItems";
import { Recipies } from "./pages/items/Recipies";
import { Resources } from "./pages/resources/Resources";
import { About } from "./pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleItems />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/items/${params.id}`),
      },
      {
        path: "/recipes",
        element: <Recipies />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
