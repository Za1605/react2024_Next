import React from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";

const PostsPage = () => {

    const {id}= useParams();
    console.log(id);
    return (
        <div>
<PostsComponent></PostsComponent>
        </div>
    );
};

export default PostsPage;