import { useEffect, useState } from 'react';

import CardList from './compontents/card-list/card-list.component';
import './App.css';
import SearchBox from './compontents/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonters, setFilteredMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');

  useEffect(
    () => {
      // code of anything that we want to happen to our functional component
      console.log('Effect fired');
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users));
    },
    [
      // Contains different dependancy: most likely the state values(here searchField or monsters) or it can be a prop value
      // Whenever the value inside of our array changes I'm going to re-render the component or re-run the callback function
    ]
  );

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onStringChange = e => {
    setStringField(e.target.value);
  };

  // Returning the object inside of the monster array which matches the name value from the search field then passing it to cardlist to render the card which we just filtered out here
  const filteredMonters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchField);
  });

  console.log(filteredMonters);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />

      <SearchBox onChangeHandler={onStringChange} placeholder="search string" />

      <CardList monsters={filteredMonters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json =>
//         this.setState(() => {
//           return { monsters: json };
//         })
//       );
//   }

//   onSearchChange = e => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // console.log('render from App Component');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonters} />
//       </div>
//     );
//   }
// }

export default App;
