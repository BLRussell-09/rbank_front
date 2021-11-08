import React from 'react';
import { Form, Button} from 'react-bootstrap';
import member from './requests/member';

class AcctSearch extends React.Component
{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    members: [],
    id: ''
  }

  componentDidMount(){
    member.getMembers()
    .then((res) => {
      console.log(res)
    })
    .catch();
  }

  handleChange(e){
    this.setState({id: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    member.getMember(this.state.id)
    .then((res) => {
      console.log(res)
    }).catch()
  }

  render(){
    return(
      <Form>
        <Form.Control
        size='lg'
        type='text'
        placeholder='Search...'
        onChange={this.handleChange}
        />
        <Button variant="primary" type="submit" onClick={this.handleSubmit} onSubmit={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    )
  }
}

export default AcctSearch