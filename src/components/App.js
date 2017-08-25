import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../resources/css/App.css';
import EditorPage from '../containers/editor-page.jsx';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import '../resources/css/input.css';

import HomePage from './home-page.jsx';
import createSagaMiddleware from 'redux-saga'
import root from '../sagas/pages';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(root);


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className='page-wrapper'>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/edit' component={EditorPage}/>
                    <Route path='/edit/:id' component={EditorPage}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
