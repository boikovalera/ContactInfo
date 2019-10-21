import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ContactInfoForm extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            ...props.contact
        }        
    }
       
    onDeleteAction = () => {        
        this.props.onDelete(this.props.contact);        
    }
    
    onContactFormSubmit = (e) => {
        e.preventDefault();        
        this.props.onSave(this.state);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {                        
        return (                        
            <form action="#" onSubmit={this.onContactFormSubmit}>
                <h3>Форма контактов</h3>
                <div className="form-group row">
                    <div className="col-12 col-sm-6 mt-2">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputName" 
                            name="firstname"
                            placeholder="Введите имя"
                            value={this.state.firstname}
                            onChange={this.onChange}/>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">                    
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputLastName" 
                            name="lastname"
                            placeholder="Введите фалилию"
                            value={this.state.lastname}
                            onChange={this.onChange}/>                        
                    </div>                    
                    <div className="col-12 col-sm-6 mt-2">                        
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputAge" 
                            name="age"
                            placeholder="Введите возраст"
                            value={this.state.age}
                            onChange={this.onChange}/>
                    </div>
                    <div className="col-12 col-sm-6 mt-2">                        
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputPhone" 
                            name="phone"
                            placeholder="Введите телефон"
                            value={this.state.phone}
                            onChange={this.onChange}/>                        
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="col-6 mt-4">
                            <button onClick={this.onDeleteAction} disabled={!this.state.id}>
                                Удалить
                            </button>
                        </div>                        
                    </div>
                    <div className="col-12 col-sm-6 p-20">                        
                        <div className="col-6 mt-4">
                            <button onClick={this.onContactFormSubmit}>
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
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default ContactInfoForm;