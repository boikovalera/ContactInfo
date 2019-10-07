import React, { Component } from 'react'
import HeaderItem from './HeaderItem'
import ContactInfoListItem from './ContactInfoListItem'
import './style.css';

export class ContactInfoList extends Component {
    render() {
        return (
            <React.Fragment>                
                <table>
                    <thead>
                        <tr>
                            {
                                this.props.headers.map(headersItem => (
                                    <HeaderItem key={headersItem.id} headersItem={headersItem} />
                                ))
                            }
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
            </React.Fragment>
        )
    }
}

export default ContactInfoList;