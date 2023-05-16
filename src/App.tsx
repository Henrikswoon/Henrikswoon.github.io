import React from 'react';

//Routing
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

//Layouts
import RootLayout from './layouts/rootLayout';

//Errorpage
import ErrorPage from './error-page';

//Components
import About from './components/About/About';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects'

//Props
import { projectData } from './components/Projects/projectData';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/projects',
        element: <Projects projects = {projectData}/>,
      },
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
]);

const App = () => {

  return (
    <RouterProvider router={router}/>
  );

}

export default App;
