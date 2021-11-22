import React from 'react';
import requests from './requests';
import Row from 'react-bootstrap/Row';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Member from './member';

class Members extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      accounts: [],
      name: '',
      memNum: ''
    }
  }

  componentDidMount(){
    requests.getMembers().then((res) => {
      this.setState({accounts: res})
    }).catch();
  }

  render()
  {

    const memberList = this.state.accounts.map((member) =>
    {
      const itemClick = () =>
      {
        this.setState(
          {
            memNum: member.acct_num
          })
        return(<Member/>)
      };

      return(<ListGroupItem key={member.id} action onClick={itemClick} >{member.first_name} {member.last_name}</ListGroupItem>)
    })

    const member_component = ((memNum) =>
    {
      return (<Member memnum={memNum}/>)
    })

    return(
      <div>
        <Row>
          <h2>Memberships</h2>
        </Row>
        <Row>
          <ListGroup>
            {memberList}
          </ListGroup>
        </Row>
        <Row>
            {member_component(this.state.memNum)}
        </Row>
      </div>
    )
  };
};

export default Members;