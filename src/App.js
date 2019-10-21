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
            },
            {
                id: 4,
                firstname: 'Антон',
                lastname: 'Дроздов',
                age: 21,
                phone: '380(68)599-14-21'
            },
            {
                id: 5,
                firstname: 'Аполлон',
                lastname: 'Симонов',
                age: 21,
                phone: '380(0540)150-84-77'
            },
            {
                id: 6,
                firstname: 'Назарий',
                lastname: 'Силин',
                age: 21,
                phone: '380(926)639-32-08'
            },
            {
                id: 7,
                firstname: 'Нелли',
                lastname: 'Шилов',
                age: 21,
                phone: '380(90)123-27-82'
            },
            {
                id: 8,
                firstname: 'Прохор',
                lastname: 'Гуляев',
                age: 21,
                phone: '380(974)226-71-83'
            },
            {
                id: 9,
                firstname: 'Орест',
                lastname: 'Мышкин',
                age: 21,
                phone: '380(57)891-70-07'
            },
            {
                id: 10,
                firstname: 'Зиновий',
                lastname: 'Артемьев',
                age: 21,
                phone: '380(299)677-07-54'
            },
            {
                id: 11,
                firstname: 'Панкратий',
                lastname: 'Медведев',
                age: 21,
                phone: '380(772)919-06-61'
            },
            {
                id: 12,
                firstname: 'Эдуард',
                lastname: 'Мельников',
                age: 21,
                phone: '380(522)391-59-10'
            },
            {
                id: 13,
                firstname: 'Кирилл',
                lastname: 'Красильников',
                age: 21,
                phone: '380(986)312-18-56'
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
                    <div className="col-6 contact-info-list">
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