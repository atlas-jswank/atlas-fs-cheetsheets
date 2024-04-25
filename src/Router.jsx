import React from "react";

import { Sidebar } from "./Sidebar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { JSXPage } from "./JSX/JSXPage";
import "./main.css";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className="root">
          <Sidebar />
          <div className="container">
            <Outlet />
          </div>
        </div>
      ),
      children: [
        {
          path: "/webpack",
          element: <></>,
        },
        {
          path: "/jsx",
          element: <JSXPage />,
        },
      ],
      errorElement: (
        <div className="root">
          <Sidebar />
          <div className="container"></div>
        </div>
      ),
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export const Router = () => <RouterProvider router={routes} />;
