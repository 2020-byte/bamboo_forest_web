import React, { useState } from 'react';
import styles from './pvs_body.module.css'

const PvsBody = (props) => {


    const [profanityChecked, setProfanityChecked] = useState(false);

    const handleCheckProfanity = () => {
        setProfanityChecked(!profanityChecked);
    };

    const [sexChecked, setSexChecked] = useState(false);

    const handleCheckSex = () => {
        setSexChecked(!sexChecked);
    };

    return (
        <div className={styles.box}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.td}>
                        <td className={styles.label}>Username</td>
                        <td>...{'{username}'}...</td>
                    </tr>
                    <tr >
                        <td rowSpan={2} className={styles.label}>
                            Post View Setting
                        </td>
                        <td className={styles.td}>
                            <input className={styles.radioItem} type="checkbox" checked={profanityChecked} onChange={handleCheckProfanity} />
                            <label className={styles.radioItem} htmlFor='coment'>I can read texts with profanity.</label>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            <input className={styles.radioItem} type="checkbox" checked={sexChecked} onChange={handleCheckSex} />
                            <label className={styles.radioItem} htmlFor='coment'>I can read sexual expressions and related topics.</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PvsBody;