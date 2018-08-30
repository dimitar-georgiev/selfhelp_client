/**
 * Created by Mitaka on 25-Aug-18.
 */
import React from 'react';

import classes from './CategoryTile.css';

const Category = (props) => (
    <div className={classes.CategoryContainer}>
    {/*<div className={classes.Category}>*/}
        {/*<img src={props.categoryImage}/>*/}
        {/*<div className={classes.Caption}>{props.caption}</div>*/}
    {/*</div>*/}
        <div className={classes.Category}>

            <div className={classes.CategoryFront}>
                <img src={props.categoryImage}/>
                <div className={classes.Caption}>{props.caption}</div>
            </div>

            <div className={classes.CategoryBack}>
                {props.description}
            </div>
        </div>
    </div>
);

export default Category;