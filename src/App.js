import React, {Component} from 'react'
import ContactInfoList from './components/ContactInfoList'
import ContactInfoForm from './components/ContactInfoForm'
import './App.css';

class App extends Component {

    state = {    
        contacts: [
            {
                id: 1,
                firstname: 'Иван',
                lastname: 'Иванов',
                age: 28,
                number: '+380999999999',
                isDone: false
            },
            {
                id: 2,
                firstname: 'Петр',
                lastname: 'Петров',
                age: 30,
                number: '+380666666666',
                isDone: false
            },
            {
                id: 3,
                firstname: 'Сидор',
                lastname: 'Сидоров',
                age: 21,
                number: '+380561111111',
                isDone: false
            }
        ],
        selected:  {
            firstname: '',
            lastname: '',
            age: 0,
            number: ''
        }         
    }

    getHeading() {
        return 'Книга контактов';
    }

    createContactItem = (contactItem) =>{
        contactItem.id = Date.now();
        contactItem.isDone = false;    
        this.addContactItem(contactItem);
    }

    addContactItem = (contactItem) => {
        this.setState({
            contacts: [...this.state.contacts, contactItem]
        });
    }

    deleteContactItem = (contactItem) => {
        this.setState({
            contacts: this.state.contacts.filter((el) => el.id !== contactItem.id)
        }) 
    } 

    toggleContactItem = (contactItem) => {
        this.onSelectContactItem(contactItem);
        this.setState({
            contacts: this.state.contacts.map((el) => {                
                return el !== contactItem ? el : {...el, isDone: !el.isDone}
            })
        })                
    }

    onSelectContactItem = (contactItem) => {
        this.setState({
            selected: this.state.contacts.find((el) => el === contactItem)
        })
    }

    onCleanContactItem = () => {
        this.setState({
            selected: {
                firstname: '',
                lastname: '',
                age: 0,
                number: ''
                }
            }
        )
    }

    render() {
        return (
            <div className="containers">
                <h2>{this.getHeading()}</h2>
                <div className="row">
                    <div className="col-6">
                        <ContactInfoList 
                            contacts={this.state.contacts}
                            onToggle={this.toggleContactItem}
                        />
                        <button onClick={this.onCleanContactItem}>Добавить</button>
                    </div>
                    <div className="col-6">
                        <ContactInfoForm 
                            selected={this.state.selected}                            
                            onCreate={this.createContactItem}
                            onDelete={this.deleteContactItem}  
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;