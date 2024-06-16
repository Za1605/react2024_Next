import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../model/IUserModel";
import userApiService from "../servises/apiServise";


const UserComponent: FC= () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
            userApiService.getAllUsers().then(value => setUsers(value.data));
        },
        []);
    return (
        <div>
            <hr/>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserComponent;