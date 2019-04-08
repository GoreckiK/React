import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {ValidationComponent} from "./Validation/ValidationComponent";
import {CharComponent} from "./CharComponent";

class App extends Component {
    state = {
      persons: [
          {id: 0, name: 'Max', age: 27},
          {id: 1, name: 'Manu', age: 29},
          {id: 2, name: 'Stef', age: 31}
      ],
        showNames: false,
        charCount: 0,
        charArray: []
    };

    toggleShowName = () => {
        const currentShowNameState = this.state.showNames;
        this.setState({showNames: !currentShowNameState})
    };

    onChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 27},
                {name: event.target.value, age: 29},
                {name: 'Stef', age: 31}
            ]
        })
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    };

    deletePersonHandler = (personIndex) => {
        const personsArray = [...this.state.persons];
        personsArray.splice(personIndex, 1);
        this.setState({persons: personsArray})
    };

    deleteLetterHandler = (letterIndex) => {
        const lettersArray = [...this.state.charArray];
        lettersArray.splice(letterIndex, 1);
        this.setState({
            charArray: lettersArray,
            charCount: lettersArray.length
        })
    };

    countTextCharacters = (event) => {
        console.log('event.target.value', event.target.value);
        const charArray = event.target.value.split('');
        console.log('chararray', this.state.charArray);

        this.setState({
            charCount: charArray.length,
            charArray: charArray
        })
    };

  render() {
      let persons = null;
      if (this.state.showNames) {
          persons = (
              <div>
                  {this.state.persons.map((person, index) => {
                    return <Person
                          click = {() => this.deletePersonHandler(index)}
                          name = {person.name}
                          age = {person.age}
                          key={person.id}
                          changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
              })}
              </div>
          )
      }

    return (
      <div className="App">
        <h1>
          It is React JS App
        </h1>
          <p>
              This is working!
          </p>
          <p>{`Ilość znaków: ${this.state.charCount}`}</p>
          <p>
              <input type='text' onChange={(event) => this.countTextCharacters(event)} value={this.state.charArray.join('')}/>
          </p>
          <ValidationComponent textLength={this.state.charCount}/>
          <p>
              {this.state.charArray.map((char, index) => {
                  return <CharComponent letter = {char} clicked={() => this.deleteLetterHandler(index)}/>
              })}
          </p>
          <button onClick={this.toggleShowName}>Toggle names</button>
          { persons }
      </div>
      //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is my new react app'))
    );
  }
}

export default App;
