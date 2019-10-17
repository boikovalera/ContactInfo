import React, { Component } from 'react'
import ContactInfoListItem from './ContactInfoListItem'
import { contactType } from '../propTypes';
import PropTypes from 'prop-types';
import './style.css';

export class ContactInfoList extends Component {
    render() {

        const {contacts, onToggle} = this.props

        return (                       
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>                        
                    </tr>                    
                </thead>
                <tbody>
                    {
                        contacts.map(contactItem => (
                            <ContactInfoListItem 
                                key={contactItem.id} 
                                contactItem={contactItem} 
                                onToggle={onToggle}/>
                        ))
                    }
                </tbody>
            </table>        
        )
    }
}

ContactInfoList.propTypes = {
    contactItem: contactType.isRequired,    
    onToggle: PropTypes.func.isRequired
}

ContactInfoList.defaultProps = {
    contactItem: []
}

export default ContactInfoList;