import React, { Component } from 'react'
import ContactInfoListItem from './ContactInfoListItem'
import ContactInfoForm from './ContactInfoForm'
import './style.css';

export class ContactInfoList extends Component {
    render() {
        return (              
            <div class="row">
                <div class="col-6">    
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Имя</th>
                                <th>Фамилия</th>                        
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
                    <button>Добавить</button>                    
                </div>
                <div class="col-6">     
                    <ContactInfoForm/>
                </div>
            </div>                                  
        )
    }
}

export default ContactInfoList;