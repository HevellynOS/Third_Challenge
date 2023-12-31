import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import RestaurantPage from '../pages/RestaurantPage.tsx'



import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/> 
      },
      {
        path:"/register",
        element: <RegisterPage/>
      },
      {
        path:"/login",
        element: <LoginPage/>
      },
      {
        path: "/restaurant-page/:restaurantId",
        element: <RestaurantPage />        
      },

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
