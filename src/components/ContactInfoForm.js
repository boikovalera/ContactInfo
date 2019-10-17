import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ContactInfoForm extends Component {
           
    onFirstNameEventChange = (e) => {                
        this.props.selected.firstname = e.target.value
    }

    onLastNameEventChange = (e) => {        
        this.props.selected.lastname = e.target.value
    }

    onAgeEventChange = (e) => {
        this.props.selected.age = e.target.value
    }

    onNumberEventChange = (e) => {
        this.props.selected.phone = e.target.value
    }

    onCreateAction = (e) => {
        e.preventDefault();
        this.props.onCreate({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            number: this.state.number
        });        
    }

    onDeleteAction = (e) => {
        e.preventDefault();        
        this.props.onDelete(this.props.selected);        
    }
    
    render() {                        
        return (
            <form action="#">
                <div className="form-group row">
                    <div className="col-12 col-sm-6 mt-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputName" 
                            placeholder="Введите имя"
                            value={this.props.selected.firstname}
                            onChange={this.onFirstNameEventChange}/>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">                    
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputLastName" 
                            placeholder="Введите фалилию"
                            value={this.props.selected.lastname}
                            onChange={this.onLastNameEventChange}/>                        
                    </div>                    
                    <div className="col-12 col-sm-6 mt-2">                        
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputAge" 
                            placeholder="Введите возраст"
                            value={this.props.selected.age}
                            onChange={this.onAgeEventChange}/>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">                        
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputPhone" 
                            placeholder="Введите телефон"
                            value={this.props.selected.number}
                            onChange={this.onNumberEventChange}/>                        
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="col-6 mt-4">
                            <button onClick={this.onDeleteAction}>
                                Удалить
                            </button>
                        </div>                        
                    </div>
                    <div className="col-12 col-sm-6 p-20">                        
                        <div className="col-6 mt-4">
                            <button onClick={this.onCreateAction}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

ContactInfoForm.propTypes = {
    selected: PropTypes.object.isRequired,
    onCreate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactInfoForm;