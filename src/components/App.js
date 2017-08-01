import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../resources/css/App.css';
import EditorPage from '../containers/editor-page.jsx';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const store = createStore(
    reducer,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className='page-wrapper'>
                    <Route exact path='/' component={() => (<h1>Главная страница</h1>)}/>
                    <Route exact path='/edit' component={EditorPage}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
