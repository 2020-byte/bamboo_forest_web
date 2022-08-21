import React, { useContext, useState } from 'react';
import { Outlet, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './post.module.css';
import Headbar from '../headbar/headbar';
import PostBody from '../post_body/post_body';
import { useEffect } from 'react';
import P from '../p/p';


const Post = (props) => {
    const posts = [
        {
            id: 1,
            username: 'tester1',
            category: 'history',
            title: 'test1',
            like: 56,
            time: '6:00',
            post: 'this is test1.'
        },
        {
            id: 2,
            username: 'tester2',
            category: 'notification',
            title: 'test2',
            like: 526,
            time: '7:00',
            post: 'this is test2.'
        },
        {
            id: 3,
            username: 'tester3',
            category: 'bookmark',
            title: 'test3',
            like: 56324,
            time: '8:00',
            post: 'this is test3.'
        },
        {
            id: 4,
            username: 'tester4',
            category: 'history',
            title: 'test4',
            like: 2362323,
            time: '3:00',
            post: 'this is test4.'
        },
        {
            id: 5,
            username: 'tester5',
            category: 'history',
            title: 'test5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
            like: 2,
            time: '2:00',
            post: 'this is test5. longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
        },
    ];

    const [searchParams] = useSearchParams();
    const c = searchParams.get('c');
    const [category, setCategory] = useState(c);

    const params = useParams();
    const id = params.id;
    const p =posts.filter(p => p.id == id);
    
    
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
            {<Outlet context={{p}}/>}
            <PostBody 
                categoryName={category} 
                handleSearch={handleSearch} 
                changeCategory={changeCategory}
                posts={posts}
            />
        </div>
    )
}

export default Post;