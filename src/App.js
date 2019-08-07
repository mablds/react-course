import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'R2D3',
          id: 1
        },
        {
          name: 'C3PO',
          id: 2
        },
        {
          name: 'BUMBLEBEE',
          id: 3
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={ monster.id } > { monster.name }</h1>)
        }
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