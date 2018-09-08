/**
 * Created by Mitaka on 30-Aug-18.
 */
import React, {Component} from 'react';

import classes from './CategoryPage.css';
import categoryImage from '../../../assets/images/meditation_cropped.jpg';

import LabeledContainerPartialBorder from '../../UI/LabeledContainerPartialBorder/LabeledContainerPartialBorder';
import Grid from '../../UI/Grid/Grid';


class CategoryPage extends Component{
    state = {
        lccn: {
            'hv4998': 'addiction and rehabilitation',
            'hv5001 >> hv5720.5': 'alcoholism, intemperance, temperance reform',
            'rc564': 'addiction, drug abuse and recovery',
            'rc567': 'nicotine addiction',
            'test class': 'test description'
        }
    };

    flattenContentElements = (elements) => {
        return [].concat(...Object.keys(elements).map(key => [key, elements[key]]));
    };

    render(){

        return(
            <div>
                <div className={classes.CategoryName}>Category Name</div>

                <div className={classes.CategoryScope}>

                    <img style={{display: 'block'}} src={categoryImage}/>

                    <div>
                        <LabeledContainerPartialBorder
                            label="Scope Note"
                        >
                            <p>Here you can find information about substance addiction and recovery.</p>

                            <p>
                                Drug addiction, also called substance use disorder, is a dependence on a legal or illegal drug or medication. Alcohol and nicotine are legal substances, but are also considered drugs.
                            </p>
                        </LabeledContainerPartialBorder>
                    </div>
                </div>

                <LabeledContainerPartialBorder
                    label="Library of Congress Class Numbers"
                >

                    <Grid
                        columns="2"
                        content={this.flattenContentElements(this.state.lccn)}
                        boldFirstColumn
                        justifyContentFirstColumnRight
                        upperCaseFirstColumn
                        justifyTextFirstColumnRight
                        capitalizeLastColumn
                    />

                </LabeledContainerPartialBorder>

                <LabeledContainerPartialBorder
                    label="Search Under"
                >

                </LabeledContainerPartialBorder>

                <div className={classes.CategoryFeaturedBooks}>Carousel with Books</div>

            </div>
        );
    }
}

export default CategoryPage;