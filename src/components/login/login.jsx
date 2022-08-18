import React from 'react';

const Login = ({login}) => {

    const onClick = () => {
        login();
    }

    return (
        <button onClick={onClick}>Login</button>
    )
}

export default Login;