import React, { Component } from 'react'
import ContactInfoListItem from './ContactInfoListItem'
import './style.css';

export class ContactInfoList extends Component {
    render() {
        return (            
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Возраст</th>
                        <th>Телефон</th>
                    </tr>                    
                </thead>
                <tbody>
                    {
                        this.props.contacts.map(contactItem => (
                            <ContactInfoListItem key={contactItem.id} contactItem={contactItem} />
                        ))
                    }
                </tbody>
            </table>        
        )
    }
}

export default ContactInfoList;