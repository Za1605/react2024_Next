import React from 'react';
import {Link, NavLink} from "react-router-dom";

const PostsComponent = () => {
    return (
        <div>
           <NavLink to= "/">users page</NavLink>
            <br/>
           <Link to= "comments"> comments page</Link>
            <br/>
           <Link to= "posts"> posts page</Link>
            <hr/>
        </div>
    );
};

export default PostsComponent;