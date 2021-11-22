import React from 'react';
import requests from './requests';
import acct_requests from '../accounts/requests';
import {ListGroup, ListGroupItem, Row, Col, Badge} from 'react-bootstrap';
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
        this.setState({accounts: res.accounts})
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

      return (<ListGroupItem key={account.id} action onClick={set_account} className="d-flex justify-content-between align-items-start">
              <div>
                {account.account_type}: {account.id}
              </div>
              <Badge variant='primary' pill>
                Balance: ${account.balance}
              </Badge>
            </ListGroupItem>)
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
            <ListGroup variant='flush'>
              <ListGroupItem>Birthday: {this.state.member.zip_code}</ListGroupItem>
              <ListGroupItem>SSN: {this.state.member.ssn}</ListGroupItem>
              <ListGroupItem>Address 1: {this.state.member.address_one}</ListGroupItem>
              <ListGroupItem>Address 2: {this.state.member.address_two}</ListGroupItem>
              <ListGroupItem>City: {this.state.member.city}</ListGroupItem>
              <ListGroupItem>State: {this.state.member.state}</ListGroupItem>
              <ListGroupItem>Zip Code: {this.state.member.zip_code}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              {acct_list}
            </ListGroup>
          </Col>
        </Row>
        {account_component(this.state.account)}
      </div>
    )
  }
};

export default Member