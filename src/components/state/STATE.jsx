import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 class STATE extends Component {

    state = {count : 0};
   
    handleClick = ()=>{
        // this.setState(prev => ({ count: prev.count + 1 }));
        this.setState({ count: this.state.count + 1 });
    };
    handleClicks = ()=>{
        this.setState(prev => ({ count: prev.count - 1 }));
    };
  render() {
    const {count} = this.state;
    return (
        <Card style={{ width: '18rem' ,textAlign : "center"}} className="m-3">
        <Card.Header style={{ height: '10rem' ,textAlign : "center",fontSize : "50px"}}>
            Class Count : {count}
            </Card.Header>
        <Card.Body>
          <Button variant="success" size="lg" className='m-3' onClick={this.handleClick} disabled={count===5 ? true : false}>+</Button>
          <Button variant="danger" size="lg" onClick={this.handleClicks} disabled={count===0 ? true : false}>-</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default STATE;