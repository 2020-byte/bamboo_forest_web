import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './post.module.css';
import Headbar from '../headbar/headbar';


const Post = (props) => {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('c');


    return (
        <div>
            <Headbar categoryName={category}/>
            <div className={styles.bodyBox}>
                <section className={styles.body}>
                    <h1>Post Category: {category}</h1>
                    <table>
                        table
                    </table>
                </section>
                <section className={styles.footbar}>
                    <form action="">
                        <input type="text" placeholder='search' />
                        <button>enter</button>
                    </form>
                    <button>
                        write
                    </button>
                </section>
            </div>
        </div>
    )
}

export default Post;