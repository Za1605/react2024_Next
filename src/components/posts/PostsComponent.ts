import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {post} from "axios";


interface IProps{
    posts:IPostModel[];
}


const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
            posts.map((post:IPostModel)=> (<li key ={post.id}> {post.title}</li>))
            }
                        </div>

    );
};

export default PostsComponent;