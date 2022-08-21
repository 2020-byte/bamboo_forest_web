import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from './post_table.module.css';





const Post_table = ({onParamsChange, allPosts}) => {


    const [searchParams] = useSearchParams();
    const search_word = searchParams.get('search_query');
    const category = searchParams.get('c');

    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        if(category === 'all' || category === 'popular_post') {
            onParamsChange();
            setPosts(allPosts);
            if(search_word) {
                setPosts(allPosts.filter(p => p.title === search_word));
            }
        } else {
            if(!search_word) {
                onParamsChange();
                setPosts(allPosts.filter(p => p.category === category));
            }else {
                setPosts(allPosts.filter(p => p.category === category && p.title === search_word));
            }
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
            <tbody >
                {posts.map(p => 
                    <tr key={p.id} >
                        <td>{p.username}</td>
                        <td>{p.category}</td>
                        <td className={styles.tr}>
                            <Link 
                                to={`/post/${p.id}?c=${category}`}
                            >
                                {p.title}
                            </Link>
                        </td>
                        <td>{p.like}</td>
                        <td>{p.time}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Post_table;

