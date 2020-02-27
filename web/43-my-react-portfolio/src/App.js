import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import ProjectDetail from './components/ProjectDetail';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" component={ProjectDetail} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
