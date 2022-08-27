import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styles from './post_table.module.css';





const Post_table = ({onParamsChange, categoryName, posts, handleCategoryChanged, handleSearchChanged}) => {



    const [searchParams] = useSearchParams();
    const search_word = searchParams.get('search_query');

    const c = searchParams.get('c'); 

    let category = null;
    if(categoryName !== 'all' && categoryName !== 'popular_posts') {
        category = c;
    } 

    useEffect(() => {
        onParamsChange();
        //console.log("change category");
        handleCategoryChanged(category);
        
        
    }, [category]);

    useEffect(() => {
        //console.log("change search_word");
        handleSearchChanged(search_word, category);
        
    }, [search_word]);

    
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
                                to={`/posts/${p.id}?c=${category}`}
                            >
                                {p.title}
                            </Link>
                        </td>
                        <td>{p.likes}</td>
                        <td>{p.updatedAt}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Post_table;

