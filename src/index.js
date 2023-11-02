import React from 'react';
import "./input.css"
import ReactDOM from 'react-dom/client';
import Body from "../src/components/Body";
import Header from "../src/components/Header";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Utils/store';


const appRoutes=createBrowserRouter([{
  path:"/",
  element:<><Header/><Body/></>
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRoutes}/>
    </Provider>
);
