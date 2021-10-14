import React from 'react';
import logo from './logo.svg';
import Navibar from './components/navbar/navbar';
import AcctSearch from './components/acct_search/acct_search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <header className="App-header">
        <AcctSearch/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
