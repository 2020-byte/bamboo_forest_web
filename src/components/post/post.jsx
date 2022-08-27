import React, { useContext, useState } from 'react';
import { Outlet, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './post.module.css';
import Headbar from '../headbar/headbar';
import PostBody from '../post_body/post_body';
import { useEffect } from 'react';
import P from '../p/p';
import userEvent from '@testing-library/user-event';


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
    

    useEffect(() => {
        postService
        .getPosts(category)
        .then(posts => setPosts([...posts]));
    }, [category])

    const handleCategoryChanged = (category) => {
        console.log(category);
        setCategory(category)
        

            //console.log('handleCategory '+ posts+", "+category);
    };

    

    const handleSearchChanged = (search_word, category) => {
        if(search_word !== null) {
            postService
            .getPosts(category)
            .then(posts => setPosts(posts.filter(p => p.title === search_word)));
            //console.log('handleSearch '+ posts+", "+category+", "+search_word);
         }
         //else {
        //     postService
        //     .getPosts(category)
        //     .then(posts => setPosts([...posts]));
        // }
        
        
        
    }

    const handleDelete = (postId) => {
        //console.log(postId);일단 !== 이거 타입틀려도 틀렸다해서 != 이걸로 해줘야 했고. 
        //posts.map(p => console.log(p));
       //posts.map(p => {console.log(p.id != postId); console.log(p.id)});
        
        postService
            .deletePost(postId)
            .then(() => setPosts(posts.filter(p =>  p.id != postId)));
            //.then(() => posts=> setPosts([...posts.filter((p) => p.id != postId)]));
        console.log(posts.filter((p) => p.id != postId));
        console.log(posts);
    }

    useEffect(() => {
        console.log(posts);
    }, [posts])

    return (
        <div>
            <Headbar categoryName={category? category: 'all'} />
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