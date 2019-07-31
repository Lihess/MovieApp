import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const cutomer = [{
    id : "1",
    name : "홍길동",
    birthday : "0608",
    gender : "남",
    job : "도둑"
  },{
    id : "2",
    name : "길동",
    birthday : "0608",
    gender : "남",
    job : "도둑"
  },{
    id : "3",
    name : "동",
    birthday : "0608",
    gender : "여",
    job : "도둑"
  }
];

class App extends Component {
  render() {
    return(
      <div className="App">
          {
            cutomer.map(c => {
              return(
              <Customer
                key = {c.id}
                id = {c.id}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
                />
             );
            })
          }
      </div>
    );
  }
}

export default App;
