import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import Post_table from '../post_table/post_table';
import styles from './post_body.module.css';

const PostBody = ({categoryName, handleSearch, changeCategory}) => {

    const [searchParams] = useSearchParams();
    const c = searchParams.get('c');
    const searchRef = useRef();

    useEffect(()=> {
        searchRef.current.value='';
        changeCategory();
    },[c]);
    

    const onSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchRef.current.value);
    };
    
    return (
        <div className={styles.bodyBox}>
            <section className={styles.body}>
                <h1>Post Category: {categoryName}</h1>
                <Post_table />
            </section>
            <section className={styles.footbar}>
                <form onSubmit={onSubmit}>
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
                <button className={styles.button} >
                    Post
                </button>
            </section>
        </div>
    );
}

export default PostBody;