import React, { Component } from 'react'

export class HeaderItem extends Component {
    render() {
        return (
            <React.Fragment>
                <th>{this.props.headersItem.name}</th>
            </React.Fragment>
        )        
    }
}

export default HeaderItem;