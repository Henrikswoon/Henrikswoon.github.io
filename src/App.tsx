import React from 'react';

//Components
import About from './components/About';
import './App.css';
import{
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const App = () => {

  return (
    <App/>
  );

}

export default App;
