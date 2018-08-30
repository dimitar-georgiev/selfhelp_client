/**
 * Created by Mitaka on 23-Aug-18.
 */
import React from 'react';

import classes from './BackDrop.css';

const BackDrop = (props) => (
    props.show ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null
);

export default BackDrop;