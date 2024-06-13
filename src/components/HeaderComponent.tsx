import React from 'react';
import {Link, NavLink} from "react-router-dom";

const PostsComponent = () => {
    return (
        <div>
            <NavLink to= "/">user page</NavLink>
            <Link to= "users"> comments page</Link>
            <Link to= "posts"> posts page</Link>
        </div>
    );
};

export default PostsComponent;