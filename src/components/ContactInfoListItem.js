import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ContactInfoListItem extends Component {
    render() {

        const {contactItem, onToggle} = this.props;
        
        return (                        
            <tr style = { contactItem.isDone ? {backgroundColor: 'grey'} : {} }
                onClick = { onToggle.bind(null, contactItem) }>
                <td>{contactItem.firstname}</td>
                <td>{contactItem.lastname}</td>                
            </tr>                                            
        )
    }
}

ContactInfoListItem.propTypes = {
    contactItem: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ContactInfoListItem;