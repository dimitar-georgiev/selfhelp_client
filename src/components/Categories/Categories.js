/**
 * Created by Mitaka on 25-Aug-18.
 */
import React from 'react';

import classes from './Categories.css';

import CategoryTile from './CategoryTile/CategoryTile';

import depression from '../../assets/images/depression.jpg';
import alternativeMedicine from '../../assets/images/alternative-medicine.jpg';
import anger from '../../assets/images/anger.jpg';
import happiness from '../../assets/images/happiness.jpg';
import motivation from '../../assets/images/motivation.jpg';
import meditation from '../../assets/images/meditation_cropped_2.png';

const Categories = (props) => (
    <div className={classes.Categories}>
        <div className={classes.GridContainer}>
            <CategoryTile categoryImage={depression} caption="Depression"/>
            <CategoryTile categoryImage={alternativeMedicine} caption="Alternative Medicine"/>
            <CategoryTile categoryImage={anger} caption="Anger Management" description="Test Description. Test Description. Test Description. Test Description. Test Description. Test Description."/>
            <CategoryTile categoryImage={happiness} caption="Happiness"/>
            <CategoryTile categoryImage={motivation} caption="Motivation"/>
            <CategoryTile categoryImage={meditation} caption="Meditation" description="Test Description. Test Description. Test Description. Test Description. Test Description. Test Description."/>
        </div>
    </div>
);

export default Categories;