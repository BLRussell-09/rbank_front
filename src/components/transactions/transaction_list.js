import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TransactionList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ListGroup>
        <ListGroupItem>Originator: {this.props.transaction.originator} Amount: ${this.props.transaction.amount}</ListGroupItem>
      </ListGroup>
    )
  };
};

export default TransactionList;