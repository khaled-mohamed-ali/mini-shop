import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Login} from "./pages/login/login";
import {MainPage} from "./pages/mainPage/mainPage";
import {Register} from "./pages/register/register";
import {ShopingCart} from "./pages/shopingCart/shopingCart";
import {NotificationBar} from "./components/notificationBar/notificationBar";
import SearchPage from "./pages/searchPage/searchPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([



    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <MainPage/>,
            },
            
            {
                path: "/shoppingCart",
                element: <ShopingCart/>
            },


        ],
    },

    {
        path: "/login",
        element: <Login/>,
    },

    {
        path: "/Register",
        element: <Register/>,
    },

    {
        path:"/search",
        element: <SearchPage/>
    }


]);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
          <NotificationBar/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
