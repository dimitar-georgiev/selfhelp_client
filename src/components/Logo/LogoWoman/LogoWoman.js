/**
 * Created by Mitaka on 23-Aug-18.
 */
import React from 'react';

import classes from './LogoWoman.css';
import logoWoman from '../../../assets/images/logoWoman.png';

const LogoWoman = (props) => (
    <div className={classes.LogoWoman}>
        <img src={logoWoman}/>
    </div>
);

export default LogoWoman;