import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Body from "../src/components/Body";
import Header from "../src/components/Header";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const appRoutes=createBrowserRouter([{
  path:"/",
  element:<><Header/><Body/></>
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={appRoutes}/>
  
);
