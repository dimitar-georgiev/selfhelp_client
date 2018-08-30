/**
 * Created by Mitaka on 22-Aug-18.
 */
import React from 'react';

import classes from './DrawerToggle.css';

const DrawerToggle = (props) => (
    <div
        className={classes.DrawerToggle}
        onClick={props.clicked}
    >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;