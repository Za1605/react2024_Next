import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../model/IPostModel";
import userApiService from "../servises/apiServise";

const PostsPage = () => {

    const {id}= useParams();
    console.log(id);

    const [post, setPost] = useState<IPostModel[]>()

    useEffect(()=>{
userApiService.getPostsofUser(id);
    },[]);
    return (
        <div>
<PostsComponent post={post} setPost={setPost}/>
        </div>
    );
};

export default PostsPage;