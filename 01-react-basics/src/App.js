import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello my name is Aakash!</p>
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
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Aakash', lastName: 'Rao' },
      company: 'Google',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hii {this.state.name.firstName} {this.state.name.lastName}! I wanted
            to work at {this.state.company} ⚛️
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: 'Swapna', lastName: 'Kumar Panda' },
              });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
