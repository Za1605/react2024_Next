import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../model/IPostModel";
import userApiService from "../servises/apiServise";

const PostsPage = () => {

    const {id}= useParams();
    //console.log(id);

    const [post, setPost] = useState<IPostModel[]>()

    useEffect(()=>{
        if (id) {
            userApiService.getPostsOfUser(id)
                .then(value => setPost(value.data))
        }
    },[id]);
    return (
        <div>
<PostsComponent post={post} />
        </div>
    );
};

export default PostsPage;