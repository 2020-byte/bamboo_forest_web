import React from 'react';
import { useState } from 'react';
import styles from './write.module.css';

const Write = (props) => {

    const [name, setName] = useState('anonymous');
    const handleChangeName = (e) => {
        setName(e.target.value);
    } 

    const [nameList, setNametList] = useState(['anonymous', 'username'])


    const [category, setCategory] = useState('Gibberish');
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    } 

    const [categoryList, setCategorytList] = useState(['Gibberish', 'Notification', 'Information', 'Humor', 'Confession'])

    const [period, setPeriod] = useState('Permanent');
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

    return (
        <div>
            <h1>Write a new post</h1>
            <p>Please write carefully, considering the mind of the reader as much as the freedom of expression.</p>
            <p className={styles.warning}>Posts that do not conform to the rules may result in a warning.</p>
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
                            Title
                        </td>
                        <td className={styles.input}>
                            <input 
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
                                        checked={category === categoryValue}
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
                                        checked={period === periodValue}
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
                    <tr className={styles.tr}>
                        <p className={styles.footerMessage}>Please write carefully, considering the mind of the reader as much as the freedom of expression.</p>
                    </tr>
                    <tr className={styles.tr}>
                        <button className={styles.button}>
                            Write in the bamboo forest
                        </button>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default Write;