import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import React from "react";

import HomePage from "../pages/HomePage";
import UserComponent from "../components/UserComponent";


export const routerConfig= createBrowserRouter([

    {path: '/',
        element: <Mainlayout/>,
            children: [ ///outlet
                {index:true, element: <HomePage/>},
                {path:'users', element:<UserComponent/>}

            ]
            },
    ]);