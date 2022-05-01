import { Component } from 'react';
import CardList from './compontents/card-list/card-list.component';
import './App.css';
import SearchBox from './compontents/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>
        this.setState(() => {
          return { monsters: json };
        })
      );
  }

  onSearchChange = e => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log('render from App Component');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonters} />
      </div>
    );
  }
}

export default App;
