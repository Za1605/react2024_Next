import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../model/IUserModel";
import userApiService from "../servises/apiServise";
import UserComponent from "./UserComponent";


const UsersComponent: FC= () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
            userApiService.getAllUsers().then(users => setUsers(users.data));
        },
        []);
    return (
        <div>
            <hr/>
            {users.map(user => <UserComponent key={user.id} user= {user}/>)}
        </div>
    );
};

export default UsersComponent;