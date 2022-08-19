import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sign_up.module.css';

const SignUp = ({login}) => {


    const password_constraint = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$";


    const navigate = useNavigate();

    const onClick = () => {
        login();
        navigate('/');
    }
    
    return (
        <div className={styles.box}>
            <form action="">
                <div>
                    <label className={styles.label} htmlFor="username">Username</label>
                    <input id='username' className={styles.input} type="text"/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="email">UBC email</label>
                    <input id='email'className={styles.input} type="email" placeholder='Must be UBC email.'/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="password">Password</label>    
                    <input id='password' className={styles.input} type="text"/>
                </div>
                <div>
                    <label className={styles.label} htmlFor="password_check">Password Check</label> 
                    <input id='password_check' className={styles.input} type="text" />
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