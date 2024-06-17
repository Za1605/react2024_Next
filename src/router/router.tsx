import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import React from "react";

import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";


export const routerConfig= createBrowserRouter([

    {
        path: '/',
        element: <Mainlayout/>,
            children: [ ///outlet
                {index:true, element: <HomePage/>},
                {
                    path:'users', element:<UsersPage/>,
                children:[
                {path:':id',element:<PostsPage/>}
                ]
                },

            ]
            },


]);