import React, { Component } from 'react'

export class RecordItem extends Component {
    render() {
        return (
            <React.Fragment>                
                <td>{this.props.records.firstname}</td>
                <td>{this.props.records.lastname}</td>
                <td>{this.props.records.age}</td>
                <td>{this.props.records.number}</td>
            </React.Fragment>
        )
    }
}

export default RecordItem;