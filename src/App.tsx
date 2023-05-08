import React from 'react';

//Components
import About from './components/About';
import RootLayout from './layouts/rootLayout';
import './App.css';
import{
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements
} from 'react-router-dom'

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='About' element={<About/>} />
    </Route>
  )
);

const App = () => {

  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <About/>
    </main>
  );

}

export default App;
