/**
 * Created by Mitaka on 23-Aug-18.
 */
import React from 'react';

import classes from './Caption.css';

const Caption = (props) => {
    // const css = [classes.CaptionMobile, classes.CaptionDesktop];

    return(
        <div className={classes.Caption} >{props.children}</div>
    );
};

export default Caption;