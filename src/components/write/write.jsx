import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Headbar from '../headbar/headbar';
import styles from './write.module.css';

const Write = ({postService}) => {


    

    const params = useParams();
    const postId = params.id;


    //To do
    //edit 할 때 적어논 거 불러오는 거 
    // const p =
    //     postService.getPostById(postId)
    //     .then(post => {
    //         console.log(post);
    //         setCategory(post.category);
    //     });
    //props로 전달받은 변수를 setState에 넣을때 무한루프가 걸렸다.
    //그래서 postService 그냥 실행하면 무한 루프 걸리는 거임.
    const [p, setP] = useState([]);
    
    
    // useEffect(() => {
    //     postService
    //         .getPostById(postId)
    //     .then((p) => {
    //         setCategory(p.category);
    //         console.log(p.category);
    //     });
        
    // }, [postId]);


    // useEffect(() => {
    //     console.log(categoryName);
    // })
    //innerText로 categoryName으로 전달하면 그 부분 렌더되니까 바뀐 값이 가는데
    //그냥 값으로 태그에 전달하면 렌더 하는 게 아니니까 바뀌기 전 값을 받음. 라고 할뻔
    //그럼 gibberish에 계속 있어야지.

    




    

    
    


    const [anonymousChecked, setAnonymous] = useState('anonymous');
    const handleChangeName = (e) => {
        setAnonymous(e.target.value);
    } 

    const [anonymousList, setAnonymoustList] = useState(['anonymous', 'username'])


    const [categoryName, setCategory] = useState('Gibberish');
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    } 


    const [categoryList, setCategorytList] = useState(['Gibberish', 'Notification', 'Information', 'Humor', 'Confession'])

    const [periodChecked, setPeriod] = useState('Permanent');
    const handleChangePeriod = (e) => {
        setPeriod(e.target.value);
    } 

    const [periodList, setPeriodList] = useState(['Permanent', 'Deleted after 3 days'])


    const [comentChecked, setComentChecked] = useState(false);

    const handleCheckComent = () => {
        setComentChecked(!comentChecked);
    };

    const [profanityChecked, setProfanityChecked] = useState(false);

    const handleCheckProfanity = () => {
        setProfanityChecked(!profanityChecked);
    };

    const [sexChecked, setSexChecked] = useState(false);

    const handleCheckSex = () => {
        setSexChecked(!sexChecked);
    };

    const titleRef = useRef();
    const textRef = useRef();


    // 나의 경우에는 사용자가 ‘결제하기’ 나 ‘제출하기’ 등의 버튼을 눌렀을 때, 
    // POST 요청에 함께 보내야 하는 state값을 변경하고 POST 요청을 해야 하는 케이스가 있었다. 
    // 업데이트된 상태값을 넘겨야 하니까 머리로 “setState()를 실행하고 POST 요청을 보내야지!” 생각하고 코드를 짰었는데, 
    // setState()도 비동기 / POST 요청도 비동기로 처리되며 심지어 POST 요청의 우선 순위가 더 높아 업데이트된 상태값이 전달되지 않는 문제가 있었다.
    // 사실 POST 요청을 보내고 다른 페이지로 이동하는 동작이여서 업데이트된 상태를 가지고 있을 필요가 없었고,  
    // 따라서 setState()를 굳이 실행하지 않고 일반 객체로 만들어 전달하여 해결했다. 
    // setState() 를 사용할 때 정말 여기서 실행해야 하나? 라고 한 번 정도 더 생각하는 습관을 가지면 좋겠다.


    const handlePost = () => {

        const newPost = {
            username: "tempoUser",
            anonymous: anonymousChecked === "anonymous" ? true: false,
            title: titleRef.current.value,
            text: textRef.current.value,
            period: periodChecked === "Permenant"? true: false,
            category: categoryName.toLowerCase(),
            comment: comentChecked,
            profanity: profanityChecked,
            sex: sexChecked,
        }

        
        
        const {username, anonymous, title, text, period, category, comment, profanity, sex} = newPost;
        postService.postPost(username, anonymous, title, text, period, category, comment, profanity, sex);
    };

    const handlePut = () => {


        postService.updatePost(
            postId, 
            titleRef.current.value, 
            textRef.current.value, 
            periodChecked === "Permenant"? true: false, 
            comentChecked, 
            profanityChecked, 
            sexChecked,
            categoryName.toLowerCase(),
            );
    }



    



    const navigate = useNavigate();
    const onClick = () => {
        if(postId) {
            handlePut();

            navigate(`/posts?c=${categoryName.toLowerCase()}`)
        }else {
            
            handlePost();
            navigate('/posts?c=all');
        }
        
    }

    


    return (
        <div>        
            <div className={styles.box}>
                <h1 className={styles.title}>Write a new post</h1>
                <p className={styles.recomending}>Please write carefully, considering the mind of the reader as much as the freedom of expression.</p>
                <p className={styles.warning}>Posts that do not conform to the rules may result in a warning.</p>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Username
                            </td>
                            <td className={styles.input}>
                                {anonymousList.map((nameValue, i) => (
                                    <React.Fragment key ={i}>
                                        <input className={styles.radioItem}
                                            id={nameValue} 
                                            type="radio" 
                                            name="name"
                                            value={nameValue} 
                                            checked={anonymousChecked === nameValue}
                                            onChange={handleChangeName}   
                                        />
                                        <label htmlFor={nameValue} className={styles.radioItem}>{nameValue}</label>
                                    </React.Fragment>
                                ))}
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label} >
                                Title
                            </td>
                            <td className={styles.input}>
                                <input
                                    ref={titleRef}
                                    className={styles.text} 
                                    id='title' 
                                    name='title' 
                                    type="text" 
                                    maxLength="30"
                                    placeholder="max-length is 30 words."/>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Content
                            </td>
                            <td className={styles.input}>
                                <textarea
                                    ref={textRef}
                                    className={styles.textArea}
                                    id="content" 
                                    name="content"
                                    rows={5}
                                    cols={30}
                                    maxLength="800"
                                    placeholder="max-length is 800 words."
                                />
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Category
                            </td>
                            <td className={styles.input}>
                                {categoryList.map((categoryValue, i) => (
                                    <React.Fragment key ={i}>
                                        <input className={styles.radioItem}
                                            id={categoryValue} 
                                            type="radio" 
                                            name="category"
                                            value={categoryValue} 
                                            checked={categoryName === categoryValue}
                                            onChange={handleChangeCategory}   
                                        />
                                        <label htmlFor={categoryValue} className={styles.radioItem}>{categoryValue}</label>
                                    </React.Fragment>
                                ))}
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Posting period
                            </td>
                            <td className={styles.input}>
                                {periodList.map((periodValue, i) => (
                                    <React.Fragment key ={i}>
                                        <input className={styles.radioItem}
                                            id={periodValue} 
                                            type="radio" 
                                            name="period"
                                            value={periodValue} 
                                            checked={periodChecked === periodValue}
                                            onChange={handleChangePeriod}   
                                        />
                                        <label htmlFor={periodValue} className={styles.radioItem}>{periodValue}</label>
                                    </React.Fragment>
                                ))}
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                No Comment
                            </td>
                            <td className={styles.input}>
                                <input className={styles.radioItem} id='coment' type="checkbox" checked={comentChecked} onChange={handleCheckComent}/>
                                <label className={styles.radioItem} htmlFor='coment'>No comments are allowed.</label>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Profanity
                            </td>
                            <td className={styles.input}>
                                <input className={styles.radioItem} type="checkbox" checked={profanityChecked} onChange={handleCheckProfanity} />
                                <label className={styles.radioItem} htmlFor='coment'>There is profanity.</label>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.label}>
                                Sex
                            </td>
                            <td className={styles.input}>
                                <input className={styles.radioItem} type="checkbox" checked={sexChecked} onChange={handleCheckSex} />
                                <label className={styles.radioItem} htmlFor='coment'>There are sexual expressions.</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.writeFooter}>
                    <p className={styles.footerMessage}>Please write carefully, considering the mind of the reader as much as the freedom of expression.</p>
                    <button className={styles.button} onClick={onClick}>
                        Write in the bamboo forest
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Write;