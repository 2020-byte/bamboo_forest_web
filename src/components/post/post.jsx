import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './post.module.css';
import Headbar from '../headbar/headbar';
import PostBody from '../post_body/post_body';


const Post = (props) => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('c');


    return (
        <div>
            <Headbar categoryName={category}/>
            <PostBody categoryName={category}/>
            
        </div>
    )
}

export default Post;