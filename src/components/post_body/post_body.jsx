import React from 'react';
import styles from './post_body.module.css';

const PostBody = ({categoryName}) => {
    
    return (
        <div className={styles.bodyBox}>
            <section className={styles.body}>
                <h1>Post Category: {categoryName}</h1>
                <table>
                    table
                </table>
            </section>
            <section className={styles.footbar}>
                <form action="">
                    <input className={styles.input} type="text" placeholder='search' />
                    <button className={styles.button}>enter</button>
                </form>
                <button className={styles.button}>
                    Post
                </button>
            </section>
        </div>
    );
}

export default PostBody;