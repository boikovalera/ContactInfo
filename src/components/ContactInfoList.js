import React, { Component } from 'react'
import ContactInfoListItem from './ContactInfoListItem'
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

export default ContactInfoList;