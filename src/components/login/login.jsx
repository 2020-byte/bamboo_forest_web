import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css'

const Login = ({login}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const navigate = useNavigate();
    

    const onSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    }

    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
        }
    };


    const goSignUp = () => {
        navigate('/sign_up');
    }

    return (
        <div className={styles.box}>
            <h2>Bamboo Forest</h2>
            <p>The bamboo forest is a place where you can cover yourself and talk.</p>
            <p>Sign up with your school email! You can chat with your friends.</p>
            <form onSubmit={onSubmit}>
                <input 
                    className={styles.input} 
                    type="email" 
                    placeholder='email'
                    value={email}
                    onChange={onChange}
                    required
                    name='email'
                />
                <input 
                    className={styles.input} 
                    type="password" 
                    placeholder='password'
                    value={password}
                    onChange={onChange}
                    name='password'
                    required    
                />
                <br />
                <div>
                    <button className={styles.button} type='submit'>Login</button>
                    <span>or</span>
                    <button className={styles.button} onClick={goSignUp}>Affiliation verification (Sign up)</button>
                </div>
            </form>
            
        </div>
        
    )
}

export default Login;