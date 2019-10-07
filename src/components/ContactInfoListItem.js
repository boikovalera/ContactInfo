import React, { Component } from 'react'
import RecordItem from './RecordItem'

export class ContactInfoListItem extends Component {
    render() {
        return (            
            <React.Fragment>                
                <tr>
                    <RecordItem records={this.props.contactItem}/>   
                </tr>                                
            </React.Fragment>            
        )
    }
}

export default ContactInfoListItem;