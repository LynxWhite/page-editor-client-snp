import React, {Component} from 'react';
import { connect } from 'react-redux';

class PreviewHeader extends Component {
    render() {
        return (
            <header>
                <h1> {this.props.title} </h1>
                <h3> {this.props.description} </h3>
            </header>
        );
    }
}

export default connect(
    state => ({
        title: state.header.title,
        description: state.header.description
    }),
    {}
)(PreviewHeader);