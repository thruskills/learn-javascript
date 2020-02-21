import React from 'react';
import {BrowserRouter as Router, Switch ,Route, Link, useRouteMatch, useParams } from 'react-router-dom';

export default function App(){
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about"exact >
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
    )
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Topics() {
    let match = useRouteMatch();
    console.log(match)
    return(
        <div> 
            <h2>Topics</h2> 
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li> 
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link> 
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} /> 
            <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
        </div>
    )
  }

  function Topic(){
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }