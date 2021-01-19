import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import PageUserSearch from './User/Search/Search';



const Root = () => {
    return(

        <Router>
            <Switch>
                <Route path="/" component ={PageUserSearch} />
               
                
            </Switch>
        </Router>
    );
};

export default Root;