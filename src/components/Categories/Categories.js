/**
 * Created by Mitaka on 25-Aug-18.
 */
import React from 'react';

import classes from './Categories.css';

import Category from './Category/Category';

import depression from '../../assets/images/depression.jpg';
import alternativeMedicine from '../../assets/images/alternative-medicine.jpg';
import anger from '../../assets/images/anger.jpg';
import happiness from '../../assets/images/happiness.jpg';
import motivation from '../../assets/images/motivation.jpg';
import meditation from '../../assets/images/meditation_cropped_2.png';

const Categories = (props) => (
    <div className={classes.Categories}>
        <div className={classes.GridContainer}>
            <Category categoryImage={depression} caption="Depression"/>
            <Category categoryImage={alternativeMedicine} caption="Alternative Medicine"/>
            <Category categoryImage={anger} caption="Anger Management"/>
            <Category categoryImage={happiness} caption="Happiness"/>
            <Category categoryImage={motivation} caption="Motivation"/>
            <Category categoryImage={meditation} caption="Meditation"/>
            {/*<Category/>*/}
        </div>
    </div>
);

export default Categories;