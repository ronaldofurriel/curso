import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Ronaldo",
    counter: 0
  };

  handleCounter = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState( {counter: counter + 1})
  }

  render() {
    const {name,counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {name}
          </p>
          <a onClick = {this.handleCounter}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            soma um {counter}
          </a>
        </header>
      </div>
    );
    }
}


export default App;
