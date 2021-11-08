import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from './logo.svg';
import Navibar from './components/navbar/navbar';
import AcctSearch from './components/acct_search/acct_search';
import MemberRoutes from './components/members_page/member_routes';
import Member from './components/members_page/member';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.memberNumChange = this.memberNumChange.bind(this)
    this.state = {
      member_number: '',
    }
  }

  memberNumChange(member_number){
    this.setState({member_number: member_number});
  }

  render(){
    // const member_component = ((member_number) => {
    //   if
    //   return(<Member memnum={member_number}/>)
    // })


    return (
      <div className="App">
        <BrowserRouter>
          <Navibar/>
          <Container fluid>
            <AcctSearch memberNumChange={this.memberNumChange}/>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
              <Member memnum={this.state.member_number}/>
              <Switch>
                <Route component={MemberRoutes} path='/members'/>
              </Switch>
            </div>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
