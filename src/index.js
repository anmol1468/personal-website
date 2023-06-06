import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProjectsPage from './pages/projectsPage/ProjectsPage';
import App from './App';
import ContactPage from './pages/ContactPage/ContactPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <ProjectsPage />
  },
  {
    path: "contact",
    element: <ContactPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

