import React, {Component} from 'react'
import ContactInfoList from './components/ContactInfoList'
import './App.css';

class App extends Component {

  state = {
    headers : [      
      {
        id: 1,
        name: 'Имя'
      }, 
      {
        id: 2,
        name: 'Фамилия'
      },
      {
        id: 3,
        name: 'Возраст'
      }, 
      {
        id: 4,
        name: 'Телефон'
      }
    ],
    contacts: [
      {
        id: 1,
        firstname: 'Иван',
        lastname: 'Иванов',
        age: 28,
        number: '+380999999999'
      },
      {
        id: 2,
        firstname: 'Петр',
        lastname: 'Петров',
        age: 30,
        number: '+380666666666'
      },
      {
        id: 3,
        firstname: 'Сидор',
        lastname: 'Сидоров',
        age: 21,
        number: '+380561111111'
      }
    ]
  }

  getHeading() {
    return 'Книга контактов';
  }

  render() {
    return (
      <div className="container">
        <h1>{this.getHeading()}</h1>  
        <ContactInfoList headers={this.state.headers} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
