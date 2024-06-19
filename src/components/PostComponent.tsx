import {IPostModel} from "../model/IPostModel";
import {FC} from "react";
import {post} from "axios";

interface IProps{
    posts:IPostModel[]
}

const PostComponent:FC<IProps> = ({posts}) => {


    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostComponent;