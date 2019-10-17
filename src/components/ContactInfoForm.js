import React, { Component } from 'react'

export class ContactInfoForm extends Component {
    render() {
        return (
            <form>                
                <div class="form-group row">
                    <div class="col-12 col-sm-6">
                        <label for="inputName" class="col-2 col-form-label">Имя</label>
                        <div class="col-10">
                            <input type="text" class="form-control" id="inputName" placeholder="Введите имя"/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label for="inputLastName" class="col-2 col-form-label">Фамилия</label>
                        <div class="col-10">
                            <input type="text" class="form-control" id="inputLastName" placeholder="Введите фалилию"/>
                        </div>
                    </div>                    
                    <div class="col-12 col-sm-6">
                        <label for="inputAge" class="col-2 col-form-label">Возраст</label>
                        <div class="col-10">
                            <input type="text" class="form-control" id="inputAge" placeholder="Введите возраст"/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <label for="inputPhone" class="col-2 col-form-label">Телефон</label>
                        <div class="col-10">
                            <input type="text" class="form-control" id="inputPhone" placeholder="Введите телефон"/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="col-6 mt-4">
                            <button>Удалить</button>
                        </div>                        
                    </div>
                    <div class="col-12 col-sm-6 p-20">                        
                        <div class="col-6 mt-4">
                            <button>Сохранить</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactInfoForm;