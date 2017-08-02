import React, {Component} from 'react';
import { connect } from 'react-redux';

class PreviewContent extends Component {
    render() {
        let content = [];
        for (let i = 0; i < this.props.content.length; i++){
            if(this.props.content[i].type === 'text'){
                content.push(<p key={i}>{this.props.content[i].value}</p>)
            }
        }
        return (
            <section>
                <p> Какой-то текст </p>
                <ul>
                    <li> список </li>
                </ul>
                {content}
            </section>
        );
    }
}

export default connect(
    state => ({
        content: state.content
    }),
    {}
)(PreviewContent);