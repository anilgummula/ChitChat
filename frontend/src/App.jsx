import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import AddFriend from './components/AddFriend'
import Home from './components/Home'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const router = createBrowserRouter([
        {
            path : "/",
            element : <>
                <Login/>
            </>
        },
        {
            path : "/register",
            element : <>
                <Register/>
            </>
        },
        {
            path : "/home",
            element : <>
                <Home/>
            </>
        },
        {
            path : "/profile",
            element : <>
                <Profile/>
            </>
        },
        {
            path : "/add",
            element : <>
                <AddFriend/>
            </>
        },
    ])


  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer/>
    </>
  )
}

export default App