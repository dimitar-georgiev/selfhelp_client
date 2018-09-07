/**
 * Created by Mitaka on 02-Sep-18.
 */
import React, {Component} from 'react';

import classes from './LabeledContainerPartialBorder.css';

class LabeledContainerPartialBorder extends Component{


    // componentDidMount(){
    //     const container = document.querySelector('.Element div');
    //
    //     console.log('Container: ', container);
    // }

    render(){


        //container might need to render this.props.children instead of this.props.content (if there are DOM elements not only text)

        // const containerClasses = [
        //     classes.Container,
        //     'Element'
        // ];


        return(
            <div className={classes.Container}>
                <div className={classes.Label}>{this.props.label}</div>
                {this.props.children}
            </div>
        );
    }
}

export default LabeledContainerPartialBorder;