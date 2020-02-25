import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Projects />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
