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
                phone: '+380999999999'
            },
            {
                id: 2,
                firstname: 'Петр',
                lastname: 'Петров',
                age: 30,
                phone: '+380666666666'
            },
            {
                id: 3,
                firstname: 'Сидор',
                lastname: 'Сидоров',
                age: 21,
                phone: '+380561111111'
            }
        ],
        selected:  this.getEmptyContact()
    }

    getEmptyContact() {
        return {
            firstname: '',
            lastname: '',
            age: 0,
            phone: ''
        }
    }

    onAddContactItem = () => {
        this.setState({
            selected: this.getEmptyContact()            
        })
    }

    onSelectContactItem = (contactItem) => {
        this.setState({
            selected: contactItem
        })
    }

    deleteContactItem = (contactItem) => {
        this.setState({
            contacts: this.state.contacts.filter((el) => el !== contactItem),
            selected: this.getEmptyContact
        }) 
    }

    saveContactItem = (contactItem) => {
        if(contactItem.id) {
            this.updateContact(contactItem);
        } else {
            this.createContactItem(contactItem);
        }
    }

    createContactItem = (contactItem) =>{
        contactItem.id = Date.now();        
        this.setState({
            contacts: [...this.state.contacts, contactItem],
            selected: contactItem
        });
    }

    updateContact = (contactItem) => {
        this.setState({
            contacts: this.state.contacts.map(el => el.id === contactItem.id ? contactItem : el),
            selected: contactItem
        })
    }

    addContactItem = (contactItem) => {
        this.setState({
            contacts: [...this.state.contacts, contactItem]
        });
    }    
            
    render() {
        return (
            <div className="containers">
                <h2>Книга контактов</h2>
                <div className="row">
                    <div className="col-6">
                        <ContactInfoList 
                            contacts={this.state.contacts}
                            onSelect={this.onSelectContactItem}
                        />
                        <button onClick={this.onAddContactItem}>Добавить</button>
                    </div>
                    <div className="col-6">
                        <ContactInfoForm 
                            key={this.state.selected.id} 
                            contact={this.state.selected}                            
                            onDelete={this.deleteContactItem}
                            onSave={this.saveContactItem}  
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;