import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Welcome to my new onClick function created and executed by react.js'
    }
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{this.state.string}</code>
        </p>
        <button onClick = {() => this.setState({string: 'HEY THATS CHANGED SO NICELY'})}>Change Text</button>
      </header>
    </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <code>Hello Worldzinh0</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }