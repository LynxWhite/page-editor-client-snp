import React, { Component } from 'react';
import {getPages} from '../actions/homeActions';
import { connect } from 'react-redux';

class HomePage extends Component {
    ComponentWillMount(){
        this.props.getPages();
    }

    render() {
        return (
            <div>
                <h1> Сортировка </h1>
                <button onClick={this.testEvent}> TestButton </button>
            </div>
        );
    }
}

export default connect(
    state => ({
        pages: state.pages
    }),
    {getPages}
)(HomePage);