import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SiteWrapper = (props) => (
    <div className={'editor-display'}>
        <h1> {props.previewData.title} </h1>
        <h4> {props.previewData.description} </h4>
        {props.content.map((item, key)=>(
            <p key={key}> {item.value} </p>
        ))}
    </div>
);

SiteWrapper.propTypes = {
    previewData: PropTypes.object.isRequired
};

export default connect(
    state => ({
        previewData: state.items,
        content: state.content
    }),
    {}
)(SiteWrapper);