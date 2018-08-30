/**
 * Created by Mitaka on 01-Aug-18.
 */
import React, {Component} from 'react';

// import classes from './Layout.css';
// import classes from './LayoutNew.css';
import classes from './Layout1.css';

import Aux from '../Auxs/Auxs';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
        windowWidth: 0,
        scroll: 0
    };

    componentDidMount(){
        this.updateWindowsDimensions();
        window.addEventListener('resize', this.updateWindowsDimensions);

        // this.updateScroll();
        // window.addEventListener('scroll', this.updateScroll);
    }
    //
    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowsDimensions);

        // window.removeEventListener('scroll', this.updateScroll);
    }
    //
    updateWindowsDimensions = () => {
        this.setState({windowWidth: window.innerWidth});
    };
    //
    // updateScroll = () => {
    //     this.setState({scroll: window.pageYOffset});
    // };

    sideDrawerToggleHandler = () => {
        // console.log('toggle: ', this.state.showSideDrawer);
        this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
    };

    sideDrawerCloseHandler = () => {
        // console.log('close');
        this.setState({showSideDrawer: false});
    };

    render(){


        return(
            <Aux>
                {/*<div className={classes.GridContainer} style={{gridTemplateColumns: windowWith, marginLeft: marginLeft}}>*/}
                {/*<div className={classes.GridContainer} style={{gridTemplateColumns: this.state.windowWith}}>*/}
                <div className={classes.GridContainer}>

                    <Toolbar
                        windowWidth={this.state.windowWidth}
                        drawerToggleClicked={this.sideDrawerToggleHandler}
                    />

                    <SideDrawer
                        show={this.state.showSideDrawer}
                        close={this.sideDrawerCloseHandler}
                    />

                    <aside className={classes.AsideLeft}>
                        {/*{this.state.windowWidth}*/}
                        Aside Left
                    </aside>

                    <main className={classes.Content}>
                        {this.props.children}
                        {/*{this.state.windowWidth}*/}
                    </main>

                    <aside className={classes.AsideRight}>
                        {/*{this.state.scroll}*/}
                        Aside Right
                    </aside>

                    <Footer/>

                </div>
            </Aux>
        );
    }
}

export default Layout;