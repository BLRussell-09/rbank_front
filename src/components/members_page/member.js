import React from 'react';
import requests from './member_requests';
import acct_requests from '../accounts/account_requests';
import {ListGroup, ListGroupItem, Alert, Row, Col} from 'react-bootstrap';
import Account from '../accounts/account';


class Member extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      member: {},
      accounts: [],
      account: {}
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.memnum !== this.props.memnum){
      requests.getMember(this.props.memnum).then((res) => {
        this.setState({account: {}})
        this.setState({member: res})
        acct_requests.getAccounts(this.props.memnum).then((res) => {
          this.setState({accounts: res})
        })
      }).catch((err) => {
        alert(`This member could not be found, please see the following error message for more details: ${err.message}`)
      });
    }
  }

  render(){
    const acct_list = this.state.accounts.map((account) =>
    {
      const set_account = () => {
        this.setState({account: account});
      };

      return <ListGroupItem key={account.id} action onClick={set_account}>Account Number:{account.id} Open Date: {account.open_date}</ListGroupItem>
    });

    const account_component = ((account) => {
      return <Account account={account}/>
    })

    if (this.props.memnum === '') {
      return null;
    }

    return(
      <div>
        <h2>{this.state.member.first_name} {this.state.member.last_name}</h2>
        <Row>
          <Col md={4}>
            <ul>
              <li>SSN: {this.state.member.ssn}</li>
              <li>Address 1: {this.state.member.address_one}</li>
              <li>Address 2: {this.state.member.address_two}</li>
              <li>City: {this.state.member.city}</li>
              <li>State: {this.state.member.state}</li>
              <li>Zip Code: {this.state.member.zip_code}</li>
            </ul>
          </Col>
          <Col md={4}>
            <ListGroup>
              {acct_list}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4} offset={3}>
            {account_component(this.state.account)}
          </Col>
        </Row>
      </div>
    )
  }
};

export default Member