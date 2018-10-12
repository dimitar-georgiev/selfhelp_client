/**
 * Created by Mitaka on 12-Sep-18.
 */
import React from 'react';

import classes from './Slide.css';

const Slide = (props) => {
    const style = classes[`Class_${props.slideNumber}`];


    const css = [classes.Slide];

    switch (props.slideNumber){
        case 0:
            css.push(classes.Position_Zero);
            break;
        case 1:
            css.push(classes.Position_One);
            break;
        case 2:
            css.push(classes.Position_Two);
            break;
        case 3:
            css.push(classes.Position_Three);
            break;
        case 4:
            css.push(classes.Position_Four);
            break;
    }

    let backgroundColor = '';

    switch (props.realIndex){
        case 0:
            backgroundColor = 'salmon';
            break;
        case 1:
            backgroundColor = 'lightgreen';
            break;
        case 2:
            backgroundColor = 'burlywood';
            break;
        case 3:
            backgroundColor = '#ffc520';
            break;
        case 4:
            backgroundColor = 'darkred';
            break;
    }

    return (
        <div
            className={css.join(' ')}
            style={{background: backgroundColor}}
            onClick={() => props.selectSlide(props.slideNumber)}
        >
            {props.content + ' Current index: ' + props.slideNumber + ' Real index: ' + props.realIndex}
        </div>
    );
};

export default Slide;