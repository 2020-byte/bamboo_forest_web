import React, { useContext, useState } from 'react';
import { Outlet, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './post.module.css';
import Headbar from '../headbar/headbar';
import PostBody from '../post_body/post_body';
import { useEffect } from 'react';
import P from '../p/p';


const Post = ({postService}) => {

    const [searchParams] = useSearchParams();
    const c = searchParams.get('c');
    const [category, setCategory] = useState(c);

    

    
    //const p =posts.filter(p => p.id == id);

    
    
    const changeCategory = () => {
        setCategory(c);
    }

    const navigate = useNavigate();

    
    const handleSearch = (search_word) => {
        navigate(`/posts?c=${category? category : 'all'}&search_query=${search_word}`);
    }

    const [posts, setPosts] = useState([]);

    const handleCategoryChanged = (c) => {
        postService
            .getPosts(c)
            .then(posts => setPosts([...posts]));
    };

    const handleSearchChanged = (search_word) => {
        setPosts(posts.filter(p => p.title === search_word));
    }

    const handleDelete = (postId) => {
        console.log(postId);
        postService
            .deletePost(postId)
            .then(() => setPosts((posts) => posts.filter((post) => post.id !== postId)));
        
    }

    return (
        <div>
            <Headbar categoryName={category} />
            <Outlet context={{ postService, handleDelete}}/>
            <PostBody 
                categoryName={c} 
                handleSearch={handleSearch} 
                changeCategory={changeCategory}
                posts={posts}
                handleCategoryChanged={handleCategoryChanged}
                handleSearchChanged={handleSearchChanged}
            />
        </div>
    )
}

export default Post;