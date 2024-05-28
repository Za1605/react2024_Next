import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps{
    user:IUserModel;
}
type IPropsType =
    IProps & {children?:React.ReactNode} & {lift?:(userId:number)=>void};



const UserComponent : FC<IPropsType> = ({user,lift}) => {

    const onClickHandler = ()=>{
        if (lift){
            lift(user.id);
        }
    };
    // @ts-ignore
    return (
        <div>
            {user.id} {user.firstname} {user.lastname}

<div>
    <button onClick = {onClickHandler}> show me posts</button>
    </div>
            </div>
    );
};

export default UserComponent;