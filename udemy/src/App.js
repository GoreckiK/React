import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
    state = {
      person: [
          {name: 'Max', age: 27},
          {name: 'Manu', age: 29},
          {name: 'Stef', age: 31}
      ]
    };

    nameChangeHandler = (newName) => {
        this.setState({
            person: [
                {name: newName, age: 27},
                {name: 'Manu', age: 29},
                {name: 'Stef', age: 41}
            ]
        })
    };

    onChangeHandler = (event) => {
        this.setState({
            person: [
                {name: 'Max', age: 27},
                {name: event.target.value, age: 29},
                {name: 'Stef', age: 31}
            ]
        })
    };
  render() {
    return (
      <div className="App">
        <h1>
          It is React JS App
        </h1>
          <p>
              This is working!
          </p>
          <button onClick={this.nameChangeHandler.bind(this, "Maximilian")}>Switch name</button>
          <Person
              name = {this.state.person[0].name}
              age = {this.state.person[0].age}
          />
          <Person
              name = {this.state.person[1].name}
              age = {this.state.person[1].age}
              click = {this.nameChangeHandler.bind(this, 'Max!')}
              changed = {this.onChangeHandler}
          >My hobbies: Racing </Person>
          <Person
              name = {this.state.person[2].name}
              age = {this.state.person[2].age}/>
      </div>
      //   React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is my new react app'))
    );
  }
}

export default App;
