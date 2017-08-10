import React, {Component} from 'react';
import { connect } from 'react-redux';

class PreviewContent extends Component {
    render() {
        let content = [];
        for (let i = 0; i < this.props.content.length; i++){
            if(this.props.content[i].type === 'text'){
                if (this.props.content[i].value.length)
                content.push(<p key={i}>{this.props.content[i].value}</p>)
            }
            if(this.props.content[i].type === 'list'){
                const list = this.props.content[i].value.split('\n');
                if(list[0].length)
                content.push(
                    <ul key={i}>
                        {list.map((item, lkey)=>(
                            <li key={lkey}>{item}</li>
                        ))}
                    </ul>
                );
            }
            if(this.props.content[i].type === 'image'){
                if (this.props.content[i].value.length)
                    content.push(<img key={i} src={this.props.content[i].value} alt='SomeImage' className='preview-image' />);
            }
        }
        return (
            <section>
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