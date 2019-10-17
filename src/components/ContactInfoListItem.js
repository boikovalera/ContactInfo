import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ContactInfoListItem extends Component {
    render() {

        const contactInfo = this.props;

        return (                        
            <tr onClick>                    
                <td>{contactInfo.contactItem.firstname}</td>
                <td>{contactInfo.contactItem.lastname}</td>                
            </tr>                                            
        )
    }
}

ContactInfoListItem.propTypes = {
    contactInfo: PropTypes.object.isRequired,    
    onToggle: PropTypes.func.isRequired
}

export default ContactInfoListItem;