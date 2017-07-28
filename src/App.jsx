import React from 'react';
import './resources/css/custom.styl';

import {Route, Link} from 'react-router-dom';

import t1 from './containers/t1.jsx';
import t2 from './containers/t2.jsx';

const App = () => (
    <div> 
        <h1> App </h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/t1'>About</Link></li>
            <li><Link to='/t2'>Topics</Link></li>
        </ul>

        <Route exact path='/' component={t1}/>
        <Route path='/t1' component={t1}/>
        <Route path='/t2' component={t2}/>
    </div>
);

export default App;