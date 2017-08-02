import React, {Component} from 'react';
import { setName, setEmail, setPhone } from '../../actions/footerActions';
import { connect } from 'react-redux';

import DropDownButton from '../common/DropdownButton.jsx';

class EditorToolsFooter extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            email: this.props.email,
            phone: this.props.phone,
            isAddedName: false,
            isAddedEmail: false,
            isAddedPhone: false
        }
    }

    onChangeName = e => {
        this.setState({name:e.target.value})
    }
    onChangeEmail = e => {
        this.setState({email:e.target.value})
    }
    onChangePhone = e => {
        this.setState({phone:e.target.value})
    }

    onBlurName = e => {
        this.props.setName(e.target.value);
    }

    onBlurEmail = e => {
        if(e.target.validity.valid)
            this.props.setEmail(e.target.value);
    }

    onBlurPhone = e => {
        if(e.target.validity.valid)
            this.props.setPhone(e.target.value);
    }

    addName = e => {
        this.setState({isAddedName:true});
    }

    addEmail = e => {
        this.setState({isAddedEmail:true});
    }

    addPhone = e => {
        this.setState({isAddedPhone:true});
    }

    render() {
        return (
            <div className='editor-footer'>
                <div className='tools-footer'>
                    <ul>
                        { this.state.name.length || this.state.isAddedName ?
                        <li>
                            <input type="text" placeholder='Name' value={this.state.name} onChange={this.onChangeName} onBlur={this.onBlurName} />
                        </li> : null
                        }
                        { this.state.email.length || this.state.isAddedEmail ?
                        <li>
                            <input type="email" placeholder='Email' required value={this.state.email} onChange={this.onChangeEmail} onBlur={this.onBlurEmail} />
                            <div className="requirements">
                                Неправильный адрес электронной почты.
                            </div>
                        </li> : null
                        }
                        { this.state.phone.length || this.state.isAddedPhone ?
                        <li>
                            <input type="tel"  
                                placeholder='Phone' 
                                value={this.state.phone} 
                                onChange={this.onChangePhone} 
                                onBlur={this.onBlurPhone} 
                                pattern="[0-9]{11}"
                            />
                            <div className="requirements">
                                Неправильный формат телефона.
                            </div>
                        </li> : null
                        }
                    </ul>
                </div>
                
                <div className='tools-right-block'>
                    <DropDownButton>
                        <div className={'dropdown-content'}>
                            { this.state.name.length || this.state.isAddedName ? null : <div className={'dropdown-item'} onClick={this.addName} > Name </div>}
                            { this.state.email.length || this.state.isAddedEmail ? null : <div className={'dropdown-item'} onClick={this.addEmail} > Email </div>}
                            { this.state.phone.length || this.state.isAddedPhone ? null : <div className={'dropdown-item'} onClick={this.addPhone} > Phone </div>}
                        </div>
                    </DropDownButton>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        name: state.footer.name,
        email: state.footer.email,
        phone: state.footer.phone
}),
{ setName, setEmail, setPhone }
)(EditorToolsFooter);