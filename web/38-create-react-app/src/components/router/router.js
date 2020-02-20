import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home(){
    return(
        <h1>This is a home page</h1>
    )
}

function About(){
    return(
        <h1>This is about page</h1>
    )
}

function Users(){
    return(
        <h1>This is users page</h1>
    )
}


function RouterComponent(){
    return(
        <Router>
        <div>
            <nav> 
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li> 
                    <li>
                        <Link to="/about/">About</Link> 
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li> 
                </ul>
            </nav>
            <Route path="/" exact component={Home}/>
            <Route path="/about/" component={About}/>
            <Route path="/users/" component={Users}/>
        </div>
        </Router>
    )
}

export default RouterComponent;