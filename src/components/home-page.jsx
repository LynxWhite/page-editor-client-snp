import React, { Component } from 'react';
import { getPages } from '../actions/homeActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    componentWillMount(){
        this.props.getPages();
        console.log('start');
    }
    render() {
        return (
            <div>
                <h1> Сортировка </h1>
                <ul>
                    {this.props.pages.map((page, key)=>(
                        <li key={key}>
                            <Link to={'edit/'+page.id}>{page.name}</Link>
                        </li>
                    ))}
                </ul>
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