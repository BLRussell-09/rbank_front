import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class AccountDetails extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ListGroup>
        <ListGroupItem>Account Status: {(this.props.account.close_date != null) ? 'Closed' : 'Open'}</ListGroupItem>
        <ListGroupItem>Balance: {this.props.account.balance}</ListGroupItem>
        <ListGroupItem>Open Date: {this.props.account.created_at}</ListGroupItem>
        <ListGroupItem>Close Date: {this.props.account.close_date}</ListGroupItem>
        <ListGroupItem>Last Activity Date: {this.props.account.updated_at}</ListGroupItem>
      </ListGroup>
    )
  };
};

export default AccountDetails;