import React, { Component } from 'react'

export class ContactInfoListItem extends Component {
    render() {
        return (                        
            <tr>                    
                <td>{this.props.contactItem.firstname}</td>
                <td>{this.props.contactItem.lastname}</td>
                <td>{this.props.contactItem.age}</td>
                <td>{this.props.contactItem.number}</td>
            </tr>                                            
        )
    }
}

export default ContactInfoListItem;