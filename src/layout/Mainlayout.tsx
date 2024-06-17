import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import UsersComponent from "../components/UsersComponent";

const Mainlayout :FC = () => {
    return (
        <div>
          <HeaderComponent/>
                             <Outlet/>
              <UsersComponent/>

        </div>
    );
};

export default Mainlayout;