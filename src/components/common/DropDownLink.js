import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../resources/css/dropdown.css';

class DropDownLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
    }

    onButtonClick() {
        this.setState({isOpened: !this.state.isOpened});
    }

    render() {
        const componentClasses = this.props.componentClasses || '';
        const buttonClasses = this.props.buttonClasses || '';
        const dropDownClasses = this.props.dropDownClasses || '';

        return (
            <div className={classNames({'is-active': this.state.isOpened}, componentClasses)}>
                <a
                    className={classNames(buttonClasses)}
                    onClick={this.onButtonClick.bind(this)}
                >
                    {this.props.buttonContent}
                </a>
                <div className={classNames(dropDownClasses)}>
                    {this.props.dropDownContent}
                </div>
            </div>
        );
    }
}

DropDownLink.propTypes = {
    componentClasses: PropTypes.string,
    buttonClasses: PropTypes.string,
    dropDownClasses: PropTypes.string,
    buttonContent: PropTypes.object,
    dropDownContent: PropTypes.object

};

export default DropDownLink;
