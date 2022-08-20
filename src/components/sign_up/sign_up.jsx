import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sign_up.module.css';

const SignUp = ({login}) => {



    const navigate = useNavigate();

    const onClick = () => {
        login();
        navigate('/');
    }


    const [nameError, setNameError] = useState(false);
    const handleNameChange = (e) => {
        const nameForm = /^[a-zA-z0-9]{4,12}$/;
        setNameError(nameForm.test(e.target.value));
    }
    

    const [emailError, setEmailError] = useState(false);
    const handleEmailChange = (e) => {
        const emailForm = /@student.ubc.ca$/;
        setEmailError(emailForm.test(e.target.value));
    }


    const [passwordError, setPasswordError] = useState(false);
    const handlePasswordChange = (e) => {
        const passwordForm = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        setPasswordError(passwordForm.test(e.target.value));
    }

    const passwordRef = useRef();

    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const handlePasswordCheckChange = (e) => {
        setPasswordCheckError(passwordRef.current.value === e.target.value);
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
                    />
                    {!nameError && <p className={styles.warning}>Please enter only uppercase and lowercase letters or numbers between 4 and 12!</p>}
                </div>
                <div>
                    <label className={styles.label} htmlFor="email">UBC email</label>
                    <input
                        id='email'
                        className={styles.input} 
                        type="email" 
                        onChange={handleEmailChange}
                    />
                    {!emailError && <p className={styles.warning}>Email must end with @student.ubc.ca!</p>}
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
                    {!passwordError && <p className={styles.warning}>Please enter at least 8 digits using a combination of numbers + English letters + special characters!</p>}
                </div>
                <div>
                    <label className={styles.label} htmlFor="password_check" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$">Password Check</label> 
                    <input 
                        id='password_check' 
                        className={styles.input} 
                        type="password"
                        onChange={handlePasswordCheckChange}
                    />
                    {!passwordCheckError && <p className={styles.warning}>Passwords do not match!</p>}
                </div>
            </form>
            <br />
            <div>
                <button className={styles.button} onClick={onClick} >Sign up</button>
            </div>
        </div>
    )
}

export default SignUp;