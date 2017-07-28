import React from 'react';

import {Route, Link} from 'react-router-dom';

import './resources/css/custom.styl';

import MainPage from './containers/main-page.jsx';
import EditorPage from './containers/editor-page.jsx';

const App = () => (
    <div> 
        <h1> App </h1>
        <ul>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/edit'>Редактор</Link></li>
        </ul>

        <Route exact path='/' component={MainPage}/>
        <Route exact path='/edit' component={EditorPage}/>
    </div>
);

export default App;