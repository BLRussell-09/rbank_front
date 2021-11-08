import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class Account extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      account: {}
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.account !== this.props.account){
      this.setState({account: this.props.account})
    }
  }

  render(){
    if (Object.keys(this.props.account).length === 0){
      return null;
    }

    return(
      <div>
        <h1>{this.state.account.account_type} {this.state.account.id} Details:</h1>
        <Row>
          <Col lg={8} md={3} sm={6}>
            <ListGroup>
              <ListGroupItem>Account Status: {(this.state.account.close_date != null) ? 'Closed' : 'Open'}</ListGroupItem>
              <ListGroupItem>Open Date: {this.state.account.open_date}</ListGroupItem>
              <ListGroupItem>Balance: {this.state.account.balance}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    )
  };
};

export default Account;
