import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from './logo.svg';
import Navibar from './components/navbar/navbar';
import AcctSearch from './components/acct_search/acct_search';
import MemberRoutes from './components/members_page/member_routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar/>
        <Container fluid>
          <AcctSearch/>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Switch>
              <Route component={MemberRoutes} path='/members'/>
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
