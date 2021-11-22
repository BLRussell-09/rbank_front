import React from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';

class AcctSearch extends React.Component
{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    member_number: ''
  }

  handleChange(e){
     if(e.target.value.length > 0){
       this.setState({member_number: e.target.value})
     }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.memberNumChange(this.state.member_number)
  }

  render(){
    return(
      <div>
        <Row>
          <Col md={3} offset={3}>
          <Form>
              <Form.Control
              size='lg'
              type='number'
              placeholder='Search...'
              onChange={this.handleChange}
              />
              <Button variant="primary" type="submit" onClick={this.handleSubmit} onSubmit={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

    )
  }
}

export default AcctSearch