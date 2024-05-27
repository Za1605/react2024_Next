import React from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps{
    user:IUserModel;
}
type IPropsType =
    IProps & {children:React.ReactNode} & {lift?:(userId:number};

const UserComponent = () => {
    return (
        <div>
            
            </div>
    );
};

export default UserComponent;