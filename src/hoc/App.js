/**
 * Created by Mitaka on 01-Aug-18.
 */
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './Layout/Layout';
// import TestMainContent from '../components/TestContent/TestContent';
import Categories from '../components/Categories/Categories';

class App extends Component {


    render(){

        return(
            <div style={{width: '100%'}}>
                <Layout>
                    <Switch>
                        <Route path="/" component={Categories}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;