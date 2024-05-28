import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../servises/us.api.servise";
import UserComponent from "../user/UserComponent";
import {IPostModel} from "../../models/IPostModel";

type IPropsType = {lift?:(userId:number)=>void}
const UsersComponent:FC<IPropsType> = ({lift}) => {

    const [users, setUsers]
        = useState<IPostModel[]>([]);

    useEffect(()=>{
        getAllUsers().then(({data})=> setUsers(data));
    },[]);



    return (
        <div>
            {users.map((user)=> (<UserComponent key ={user.id} user ={user},lift={lift}/>))}
            </div>
    );
};

export default UsersComponent;