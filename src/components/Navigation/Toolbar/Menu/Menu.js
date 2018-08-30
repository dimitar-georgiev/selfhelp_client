/**
 * Created by Mitaka on 22-Aug-18.
 */
import React, {Component} from 'react';

import classesGlobal from '../../../../hoc/Layout/Layout1.css';
import classes from './Menu.css';

import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';
import Caption from '../../../Caption/Caption';
import NavigationItems from '../../NavigationItems/NavigationItems';
import BookLogo from '../../../Logo/BookLogo/BookLogo';

class Menu extends Component{
    state = {
        width: 0
    };

    componentWillReceiveProps(){
        this.setState((prev, props) => ({width: props.windowWidth}));
    }

    render(){
        // console.log('Menu W: ', this.state.width);

        const css = [classesGlobal.Menu, classes.Menu];

        return(
            <div className={css.join(' ')}>
                <DrawerToggle
                    clicked={this.props.drawerToggle}
                />

                {this.state.width <= 1023 ? <Caption>Selfhelp Reference</Caption> : null}

                <nav className={classes.DesktopOnly}>
                    <NavigationItems/>
                </nav>

                <BookLogo/>
            </div>
        );
    }
}

export default Menu;