import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './p.module.css';

const P = () => {


    const {p} = useOutletContext();
    
    //useState한 번 박아 노면 안바뀐다는 걸 깜빡했네, 서버에서 매번 가져올 수 있는 것들을 useState할 필요 없을듯.
    const {title, username, time, like, post, lookup, id, category} = p[0];




    const [bookmarked, setBookmarked] = useState(false);
    const [bookmarkColor, setBookmarkColor] = useState('grey');


    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    //To do. sign up때랑 여기랑 뭐가 달라서 여기서 한 박자 늦게 바뀌는지
    //거기도 지금은 제대로 되지만 return에 값안이용하면 한 박자 늦게 바뀌는지 확인하기
    useEffect(()=> {
        console.log(bookmarked)
        if (bookmarked) {
            setBookmarkColor('rgb(226, 43, 198)');
        }else {
            setBookmarkColor('grey');
        }
    }, [bookmarked]);


    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked);
    }

    const handleReport = () => {
        console.log("reporting");
    }


    const [name, setName] = useState('anonymous');
    const handleChangeName = (e) => {
        setName(e.target.value);
    } 

    const [nameList, setNametList] = useState(['anonymous', 'username']);


    const [willComment, setWillComment] = useState(false);
    const onClickCommentArea = () => {
        setWillComment(true);
    }

    const handleComment = () => {
        console.log('Added comment!');

    }

    
    return (
        <div className={styles.box}>
            <section className={styles.head}>
                <div className={styles.headTitle}>
                    <h3 className={styles.title}>{title}</h3>
                    <button
                        onClick={handleBookmark}
                        className={styles.bookmarkButton}
                        style={{color:bookmarkColor}}//style오타 나서 헤맸음. 오타조심하기.
                    >
                        <i className="fa-solid fa-bookmark"></i>
                    </button>
                </div>
                <div className={styles.headInfo}>
                    <span>{username} | {time}</span>
                    <span>+{like}❤️/ {lookup}Lookup</span>
                </div>
            </section>
            <section>
                <div className={styles.textBox}>
                    {post}
                </div>
                <div className={styles.footBar}>
                    <button className={styles.footbarButton} onClick={handleLike}>
                        <span className={liked? styles.liked : styles.unliked}>
                            <i className="fa-solid fa-heart"></i>
                        </span>
                        <span>Liked</span>
                    </button>
                    <button className={styles.footbarButton} onClick={handleReport}>
                        <span>
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </span>
                        <span>
                            Report
                        </span>
                    </button>
                    <NavDropdown title='' id="navbarScrollingDropdown" className={styles.dropdown} align="end">
                        <NavDropdown.Item as="div" className={styles.linkBox}>
                            <Link to={`/write/${id}?edit=y`} className={styles.link}>
                                Edit 
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as="div" className={styles.linkBox}>
                            <Link to={`/post?c=${category}`} className={styles.link}>
                                Delete
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </section>
            <hr/>
            <section>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Username
                            </td>
                            <td className={styles.input}>
                                {nameList.map((nameValue, i) => (
                                    <React.Fragment key ={i}>
                                        <input className={styles.radioItem}
                                            id={nameValue} 
                                            type="radio" 
                                            name="name"
                                            value={nameValue} 
                                            checked={name === nameValue}
                                            onChange={handleChangeName}   
                                        />
                                        <label htmlFor={nameValue} className={styles.radioItem}>{nameValue}</label>
                                    </React.Fragment>
                                ))}
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Comment
                            </td>
                            <td className={styles.input}>
                                <textarea
                                    onClick={onClickCommentArea}
                                    className={styles.textArea}
                                    id="content" 
                                    name="content"
                                    rows={5}
                                    cols={30}
                                    maxLength="400"
                                    placeholder="max-length is 400 words."
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    willComment &&
                    <div className={styles.writeFooter}>
                        <button className={styles.button} onClick={handleComment}>
                            Write in the bamboo forest
                        </button>
                    </div>
                }
            </section>
            <hr />
            <section>
                <table className={styles.commentTable}>
                    <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Username1
                            </td>
                            <td className={styles.comment}>
                                comment~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Username2
                            </td>
                            <td className={styles.comment}>
                                comment2~~~~~~~~~~~~~~~~~~~
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default P;