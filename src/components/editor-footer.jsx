import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {} from '../actions/editorActions';

class EditorFooter extends Component {
    render() {
        return (
            <div>
                Контент футера
            </div>
        );
    } 
}

EditorFooter.PropTypes = {
    data: PropTypes.object.isRequired
};

export default connect(
    state => ({
        data: state.footer
    }),
    {}
)(EditorFooter);