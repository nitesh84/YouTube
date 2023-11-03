import React from 'react';
import "./input.css"
import ReactDOM from 'react-dom/client';
import Body from "../src/components/Body";
import Header from "../src/components/Header";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


const appRoutes = createBrowserRouter([{
  path: "/",
  element:<><Header/> <Body /></>,
  children: [{
    path: "/",
    element: <MainContainer />
  },
  {
    path: "watch",
    element:<WatchPage/>
  }

  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRoutes} />
  </Provider>
);
