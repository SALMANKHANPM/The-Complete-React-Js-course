import { useEffect, useState } from 'react';

import CardList from './compontents/card-list/card-list.component';
import './App.css';
import SearchBox from './compontents/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonters, setFilteredMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    // code of anything that we want to happen to our functional component
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />

      <SearchBox
        className={'title-search-box'}
        onChangeHandler={onTitleChange}
        placeholder="search title"
      />

      <CardList monsters={filteredMonters} />
    </div>
  );
};

export default App;
