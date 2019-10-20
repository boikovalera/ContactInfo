import React, { Component } from 'react'
import ContactInfoListItem from './ContactInfoListItem'
import { contactType } from '../propTypes';
import PropTypes from 'prop-types';
import './ContactInfoList.css';

export class ContactInfoList extends Component {
    render() {
        
        return (            
            <ul>
                {
                    this.props.contacts.map(contact => (
                        <ContactInfoListItem 
                            key={contact.id} 
                            contact={contact} 
                            onSelect={this.props.onSelect}/>
                    ))
                }
            </ul>
        )
    }
}

ContactInfoList.propTypes = {
    /*contactItem: contactType.isRequired,    
    onSelect: PropTypes.func.isRequired*/
}



export default ContactInfoList;