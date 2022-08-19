import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from './post_table.module.css';





const Post_table = ({onParamsChange}) => {

    const allpost = [
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
            title: 'test5',
            like: 2,
            time: '2:00',
            post: 'this is test5.'
        },
    ];


    const [searchParams] = useSearchParams();
    const search_word = searchParams.get('search_query');
    const category = searchParams.get('c');

    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        if(!search_word) {
            onParamsChange();
            setPosts(allpost.filter(p => p.category === category));
        }else {
            setPosts(allpost.filter(p => p.category === category && p.title === search_word));
        }
    }, [search_word, category])
    
    return (
        <Table  hover className={styles.table}>
            <thead >
                <tr className={styles.th}>
                    <th className={styles.thItem}>Username</th>
                    <th className={styles.thItem}>Category</th>
                    <th className={styles.thItem}>Title</th>
                    <th className={styles.thItem}>Likes</th>
                    <th className={styles.thItem}>Time</th>
                </tr>
            </thead>
            <tbody className={styles.tb}>
                {posts.map(p => 
                    <tr key={p.id}>
                        <td>{p.username}</td>
                        <td>{p.category}</td>
                        <td>{p.title}</td>
                        <td>{p.like}</td>
                        <td>{p.time}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Post_table;