import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import UserComponent from "../components/UserComponent";

const Mainlayout = () => {
    return (
        <div>
          <HeaderComponent/>
            <Outlet/>
              <UserComponent/>

        </div>
    );
};

export default Mainlayout;