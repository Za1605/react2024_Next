import React from 'react';
import {IUserModel} from "../model/IUserModel";
import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";

interface IProps{
    user:IUserModel;
}


const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate();
    return (
        <div>
             <Link
                 to={user.id.toString()}
             >{user.name}</Link>
        </div>
    );
};

export default UserComponent;