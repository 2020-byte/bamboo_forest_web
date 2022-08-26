import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './emi_body.module.css';

const EmiBody = (props) => {

    const name = "temporaryName";

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    }


    const [username, setUsername] = useState(name);

    const [nameError, setNameError] = useState(true);
    const handleNameChange = (e) => {
        const nameForm = /^[a-zA-z0-9]{4,12}$/;
        setUsername(e.target.value);
        setNameError(nameForm.test(e.target.value));
    }


    const [password, setPassword] = useState('');

    const [passwordError, setPasswordError] = useState(false);
    const handlePasswordChange = (e) => {
        const passwordForm = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        setPassword(e.target.value);
        setPasswordError(passwordForm.test(e.target.value));
    }

    const passwordRef = useRef();

    
    const [passwordCheck, setPasswordCheck] = useState('');

    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const handlePasswordCheckChange = (e) => {
        setPasswordCheck(e.target.value);
        setPasswordCheckError(passwordRef.current.value === e.target.value);
    }

    const [newPassword, setNewPassword] = useState('');

    const [newPasswordError, setNewPasswordError] = useState(false);
    const handleNewPasswordChange = (e) => {
        const newPasswordForm = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        setNewPassword(e.target.value);
        setNewPasswordError(newPasswordForm.test(e.target.value));
    }

    return (
        <div className={styles.box}>
            <form action="">
                <div>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input 
                        id='username' 
                        className={styles.input} 
                        type="text"
                        onChange={handleNameChange}
                        value={username}
                    />
                    {!nameError && <p className={styles.warning}>Please enter only uppercase and lowercase letters or numbers between 4 and 12!</p>}
                </div>
                <div>
                    <label className={styles.label} htmlFor="password">Password</label>    
                    <input
                        ref={passwordRef}
                        id='password' 
                        className={styles.input} 
                        type="password"
                        onChange={handlePasswordChange}
                    />
                    {!passwordError  && password && <p className={styles.warning}>Please enter at least 8 digits using a combination of numbers + English letters + special characters!</p>}
                    {!password && <p className={styles.recommanding}>Leave blank if you don't want to change</p>}
                </div>
                <div>
                    <label className={styles.label} htmlFor="password_check" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$">Password Check</label> 
                    <input 
                        id='password_check' 
                        className={styles.input} 
                        type="password"
                        onChange={handlePasswordCheckChange}
                    />
                    {!passwordCheckError && passwordCheck && <p className={styles.warning}>Passwords do not match!</p>}
                </div>
                <div>
                    <abbr title="Required Must be entered.">*</abbr>
                    <label className={styles.label} htmlFor="newPassword">New Password</label>    
                    <input
                        id='newPassword' 
                        className={styles.input} 
                        type="password"
                        onChange={handleNewPasswordChange}
                    />
                    {!newPasswordError  && newPassword && <p className={styles.warning}>Please enter at least 8 digits using a combination of numbers + English letters + special characters!</p>}
                    {!newPassword && <p className={styles.warning}>You must put an existing password to be modified.</p>}
                </div>
            </form>
            <br />
            <div>
                <button className={styles.button} onClick={onClick} >Sign up</button>
            </div>
        </div>
    )
}

export default EmiBody;