import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './post_table.module.css';





const Post_table = (props) => {

    const allpost = [
        {
            id: 1,
            username: 'tester1',
            category: 'history',
            title: 'test1',
            heart: 56,
            time: '6:00',
            post: 'this is test1.'
        },
        {
            id: 2,
            username: 'tester2',
            category: 'notification',
            title: 'test2',
            heart: 526,
            time: '7:00',
            post: 'this is test2.'
        },
        {
            id: 3,
            username: 'tester3',
            category: 'bookmark',
            title: 'test3',
            heart: 56324,
            time: '8:00',
            post: 'this is test3.'
        },
        {
            id: 4,
            username: 'tester4',
            category: 'history',
            title: 'test4',
            heart: 2362323,
            time: '3:00',
            post: 'this is test4.'
        },
    ];


    const [searchParams] = useSearchParams();
    const search_word = searchParams.get('search_query');
    const category = searchParams.get('c');

    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        if(search_word=='') {
            setPosts(allpost.filter(p => p.category === category));
        }else {
            setPosts(allpost.filter(p => p.category === category && p.title === search_word));
        }
    }, [search_word, category])
    
    return (
        <table>
            {category}
            <hr />
            {posts.map(p => <div>{p.category}</div> )}
        </table>
    )
}

export default Post_table;