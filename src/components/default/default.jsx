import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Headbar from '../headbar/headbar';


import styles from './default.module.css';

const Default = (props) => {

    const location = useLocation();
    const category = location.pathname.slice(1);

    return (
        <div>
            <Headbar categoryName={category}/>
            <Outlet />
        </div>
    )
}

export default Default;