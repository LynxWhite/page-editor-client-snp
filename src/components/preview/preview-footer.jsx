import React, {Component} from 'react';
import { connect } from 'react-redux';

class PreviewFooter extends Component {
    render() {
        return (
            <footer>
                <h4> Контактные данные </h4>
                <h6><strong>Name: </strong> {this.props.name} </h6>
                <h6><strong>Email: </strong> {this.props.email} </h6>
                <h6><strong>Phone: </strong> {this.props.phone} </h6>
            </footer>
        );
    }
}

export default connect(
    state => ({
        name: state.footer.name,
        email: state.footer.email,
        phone: state.footer.phone
    }),
    {}
)(PreviewFooter);