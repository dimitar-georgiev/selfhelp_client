/**
 * Created by Mitaka on 01-Aug-18.
 */
import React from 'react';

import classes from './SideDrawer.css';

import Aux from '../../../hoc/Auxs/Auxs';
import BackDrop from '../../UI/BackDrop/BackDrop';
import LogoWoman from '../../Logo/LogoWoman/LogoWoman';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop
                show={props.show}
                clicked={props.close}
            />

            <div className={attachedClasses.join(' ')}>
                <LogoWoman/>

                <NavigationItems/>
            </div>
        </Aux>
    );
};

export default SideDrawer;