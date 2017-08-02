import React, {Component} from 'react';
import { connect } from 'react-redux';

class PreviewFooter extends Component {
    render() {
        if (!(this.props.name.length || this.props.email.length || this.props.phone.length))
            return null
        return (
            <footer>
                <h4> Контактные данные </h4>
                {this.props.name.length ? <h6><strong>Name: </strong> {this.props.name} </h6> : null}
                {this.props.email.length ? <h6><strong>Email: </strong> {this.props.email} </h6> : null}
                {this.props.phone.length ?<h6><strong>Phone: </strong> {this.props.phone} </h6> : null}
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