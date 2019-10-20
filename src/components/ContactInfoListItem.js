import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ContactInfoListItem.css';

export class ContactInfoListItem extends Component {
    render() {

        const {contact} = this.props;
        
        return (            
            <li onClick={this.props.onSelect.bind(null, contact)}>
                {contact.firstname} {contact.lastname}
            </li>
        )
    }
}

ContactInfoListItem.propTypes = {
    contact: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default ContactInfoListItem;