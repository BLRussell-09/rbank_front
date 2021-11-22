import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import requests from './requests';
import AccountDetails from './account_details';
import TransactionList from '../transactions/transaction_list';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      account: {},
      active_tab:'account-details',
      transactions: []
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.account !== this.props.account){
      let id = this.props.account.id
      requests.getAccount(id).then((account) => {
        this.setState({account: account});
        this.setState({transactions: account.transactions});
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  render(){
    const transaction_list = this.state.transactions.map((transaction) => {
      return(
        <TransactionList transaction={transaction} />
      )
    })

    if (Object.keys(this.props.account).length === 0){
      return null;
    }

    let bay_component;
    if (this.state.active_tab == 'transactions'){
      bay_component = transaction_list
    }
    else {
      bay_component = <AccountDetails account={this.state.account}/>
    }

    return(
      <div>
        <h1>{this.state.account.account_type} {this.state.account.id} Details:</h1>
        <Row>
          <Col lg={{span: 6, offset: 3}} md={{span: 3, offset: 3}} sm={12}>
            <Nav
              className="justify-content-center"
              defaultActiveKey="account-details"
              variant="tabs"
              onSelect={(selectedKey) => this.setState({active_tab: selectedKey})}
            >
              <Nav.Item>
                <Nav.Link eventKey="account-details">Account Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="transactions">Transactions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 6, offset: 3}} md={{span: 3, offset: 3}} sm={12}>
            {bay_component}
          </Col>
        </Row>
      </div>
    )
  };
};

export default Account;
