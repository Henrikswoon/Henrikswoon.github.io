import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootLayout from './layouts/rootLayout';
import About from './components/About';
import Contact from './pages/Contact';
import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { error } from 'console';
import { element } from 'prop-types';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      }
    ],
  },
  {
    path: '/about',
    element: <About/>,
  }
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
