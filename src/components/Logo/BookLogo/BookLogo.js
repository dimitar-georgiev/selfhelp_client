/**
 * Created by Mitaka on 23-Aug-18.
 */
import React from 'react';

import classes from './BookLogo.css';
import bookLogo from '../../../assets/images/bookLogo.jpg';

const BookLogo = (props) => (
    <div className={classes.BookLogo}>
        <img src={bookLogo}/>
    </div>
);

export default BookLogo;