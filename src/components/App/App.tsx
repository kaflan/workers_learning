import React, { FC } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const App: FC = () => (
  <Router>
    <Route exact path="/">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
                        Learn React
          </a>
        </header>
      </div>
    </Route>
  </Router>
);

export default App;
