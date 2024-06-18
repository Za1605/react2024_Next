import React from 'react';
import {FC} from "react";
import {IPostModel} from "../model/IPostModel";

interface IProps {
    posts:IPostModel[]
}

const PostsComponent :FC<IProps> = ({posts}) => {

    return (
        <div>
 
        </div>
    );
};

export default PostsComponent;