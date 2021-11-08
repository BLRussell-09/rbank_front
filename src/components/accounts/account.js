import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
        <h1>Account Details:</h1>
        <Row>
          <Col md={4}>
            <ul>
              <li>Account Status: {(this.state.account.close_date != null) ? 'Closed' : 'Open'}</li>
            </ul>
          </Col>
        </Row>
      </div>
    )
  };
};

export default Account;
