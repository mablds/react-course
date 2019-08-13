import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

//creating the app class
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  //lifecycle app
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    //consumiu API e transformou em json
      .then(response => response.json())
      // em json, passou os dados transformados pro state na chave do array monsters => Assíncrona
      .then(obj => this.setState({ monsters: obj}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  
  //rendering the things
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="App">
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} /> 
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