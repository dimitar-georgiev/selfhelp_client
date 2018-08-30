/**
 * Created by Mitaka on 08-Aug-18.
 */
import React from 'react';

import jumbotronImage from '../../assets/images/bookLogo.jpg';
import classes from './Jumbotron.css';

const Jumbotron = (props) => (
    <div className={classes.Jumbotron}>
        <img src={jumbotronImage} alt="Jumbotron"/>
    </div>
);

export default Jumbotron;