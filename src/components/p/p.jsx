import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './p.module.css';
import ReportButton from '../report_button/report_button';

const P = ({userId}) => {


    const {postService, handleDelete} = useOutletContext();
    
    const params = useParams();
    const postId = params.id;
    const [p, setP] = useState([]);
    
    
    useEffect(() => {
        postService
            .getPostById(postId)
            .then((post) => setP(post));
    }, [postId]);


    const [authorized, setAuthorized] = useState(false);
    useEffect(() => {
        
        
        //부모에서 props바뀌면
        //자식에서도 바뀐거 가져온다.
        //여기서 sign up 할 때 만들어지는 유저 아이디의 이름(userId)랑
        //log in 할 때 만들어지는 유저 아이디의 이름 (id)가 달라서
        //id를 불러오면 당연히 userId가 없는 거임
        //이럴 때 전체 이름을 보기 위해서 먼저 object를 불러와서
        //이름이 제대로 되있는 지 부터 확인
  
        setAuthorized(userId === p.userId);
    },[p]);


    //useState한 번 박아 노면 안바뀐다는 걸 깜빡했네, 서버에서 매번 가져올 수 있는 것들을 useState할 필요 없을듯.
    const {title, username, createdAt, likes, text, views, id, category} = p;
    //p이중 중첩으로 나오는 줄 알고 p[0]했는데 이중중첩아니라 p로 해야했음
    //그런데 뭔진 모르겠는데 이 코드가 useEffect보다 나중에 실행되는 것 같은데 useEffect안에 있는 콘솔은 작동안하고
    //useEffect 바깥에 있는 코드는 작동함.
    //아 useEffect는 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때) 
    //나타나는 거임 코드 짠 순서에 맞쳐서 나타나는 게 아니라
    //그래서 이 코드 읽어 내려가면서 useEffect를 먼저 작동시키는 게아니라 다른 것들부터 작동시키고 오류가 있으면,
    //useEffect가 작동안하는 거인듯.
    //그래서 애초에 useState([])이라 넣어 났으니 p[0]이 존재할 수 없으니 오류 먼저 나고 useEffect 작동 안한 거인 듯.




    const [bookmarked, setBookmarked] = useState(false);
    const [bookmarkColor, setBookmarkColor] = useState('grey');


    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    };

    //To do. sign up때랑 여기랑 뭐가 달라서 여기서 한 박자 늦게 바뀌는지
    //거기도 지금은 제대로 되지만 return에 값안이용하면 한 박자 늦게 바뀌는지 확인하기
    useEffect(()=> {
        //console.log(bookmarked)
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

    const onDelete = () => {//onClick은 js 자체 콜백이라서 매개변수 넣으면 이벤트로 생각함.
        handleDelete(postId);
        
    }
    //이거 함수설정 안하고 그냥 넘겨버리면 왠지 모르겠는데 이 페이지로 오면서 자동으로 작동됨.

    
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
                    <span>{username} | {createdAt}</span>
                    <span>+{likes}❤️/ {views}Lookup</span>
                </div>
            </section>
            <section>
                <div className={styles.textBox}>
                    {text}
                </div>
                <div className={styles.footBar}>
                    <button className={styles.footbarButton} onClick={handleLike}>
                        <span className={liked? styles.liked : styles.unliked}>
                            <i className="fa-solid fa-heart"></i>
                        </span>
                        <span>Liked</span>
                    </button>
                    <ReportButton />
                    <NavDropdown style={{display: authorized ? 'block' : 'none'}} title='' id="navbarScrollingDropdown" className={styles.dropdown} align="end">
                        <NavDropdown.Item as="div" className={styles.linkBox}>
                            <Link to={`/write/${id}`} className={styles.link}>
                                Edit 
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as="div" className={styles.linkBox} onClick={onDelete}>
                            <Link to={`/posts?c=${category}`} className={styles.link} >
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
                        <button className={styles.button} onClick={handleComment(postId)}>
                            Comment
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