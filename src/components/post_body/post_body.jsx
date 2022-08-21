import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import Post_table from '../post_table/post_table';
import styles from './post_body.module.css';

const PostBody = ({handleSearch, changeCategory, posts}) => {

    const searchRef = useRef();

    const onParamsChange = () => {
            searchRef.current.value='';
            changeCategory();
    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchRef.current.value);
    };

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/write');
    }
    
    return (
        <div className={styles.bodyBox}>
            <section className={styles.body}>
                <Post_table 
                    onParamsChange={onParamsChange} 
                    allPosts={posts}
                />
            </section>
            <section className={styles.footbar}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <input
                        ref={searchRef} 
                        className={styles.input} 
                        type="text" 
                        placeholder='search'
                    />
                    <button className={styles.button}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <button onClick={onClick} className={styles.button} >
                    Post
                </button>
            </section>
        </div>
    );
}

export default PostBody;