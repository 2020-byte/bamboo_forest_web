import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'

const Login = ({login}) => {

    const navigate = useNavigate();

    const onClick = () => {
        login();
        navigate('/');
    }

    const goSignUp = () => {
        navigate('/sign_up');
    }

    return (
        <div className={styles.box}>
            <h2>Bamboo Forest</h2>
            <p>The bamboo forest is a place where you can cover yourself and talk.</p>
            <p>Sign up with your school email! You can chat with your friends.</p>
            <div>
                <input className={styles.input} type="text" placeholder='email' />
                <input className={styles.input} type="text" placeholder='password'/>
            </div>
            <br />
            <div>
                <button className={styles.button} onClick={onClick}>Login</button>
                <span>or</span>
                <button className={styles.button} onClick={goSignUp}>Affiliation verification (Sign up)</button>
            </div>
        </div>
        
    )
}

export default Login;