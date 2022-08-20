import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './post.module.css';
import Headbar from '../headbar/headbar';
import PostBody from '../post_body/post_body';
import { useEffect } from 'react';


const Post = (props) => {

    const [searchParams] = useSearchParams();
    const c = searchParams.get('c');
    const [category, setCategory] = useState(c);

    
    const changeCategory = () => {
        setCategory(c);
    }

    const navigate = useNavigate();

    
    const handleSearch = (search_word) => {
        navigate(`/post?c=${category? category : 'all'}&search_query=${search_word}`);
    }


    return (
        <div>
            <Headbar categoryName={category} />
            <PostBody categoryName={category} handleSearch={handleSearch} changeCategory={changeCategory}/>
            
        </div>
    )
}

export default Post;