/**
 * Created by Mitaka on 01-Aug-18.
 */
import React, {Component} from 'react';

import classes from './Toolbar.css';
import classesGlobal from '../../../hoc/Layout/Layout1.css';

import Aux from '../../../hoc/Auxs/Auxs';

import Jumbotron from '../../Jumbotron/Jumbotron';
import Caption from '../../Caption/Caption';
import Menu from './Menu/Menu';

class Toolbar extends Component{
    state = {
        width: 0
    };

    componentWillReceiveProps(){
        // console.log('propss: ', this.props.windowWidth);
        this.setState((prev, props) => ({width: props.windowWidth}));
    }

    render(){

        const css = [classesGlobal.Jumbotron, classes.Toolbar];

        // console.log('State wW: ', this.state.width);

        return(
            <Aux>
                <div className={css.join(' ')}>

                    {this.state.width >= 1024 ? <Caption>Selfhelp Reference</Caption> : null}

                    <Jumbotron/>
                </div>

                <Menu
                    windowWidth={this.props.windowWidth}
                    drawerToggle={this.props.drawerToggleClicked}
                />
            </Aux>
        );
    }
}

export default Toolbar;