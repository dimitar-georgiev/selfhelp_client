/**
 * Created by Mitaka on 08-Aug-18.
 */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserLock} from '@fortawesome/free-solid-svg-icons';

import classes from './NavigationItems.css';

import Aux from '../../../hoc/Auxs/Auxs';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/"
        >Categories</NavigationItem>

        <NavigationItem
            link="test"
            exact
        >Search</NavigationItem>

        <NavigationItem
            link="/login"
        >
            <FontAwesomeIcon icon={faUserLock}/>
        </NavigationItem>
    </ul>
);

export default NavigationItems;