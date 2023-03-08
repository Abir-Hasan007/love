import React, { Component } from 'react'

class EVENT_HANDLER extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changevalue : '' 
      }
    }
    
    handleOnchange=(e)=>{
        // console.log(e.target.value);
        this.setState({ changevalue: e.target.value });
       
    }
  render() {
    const {changevalue} = this.state;
    return (
        <div>
          Type: <input type="text" onChange={this.handleOnchange}/>
          <h1>{changevalue}</h1>
        </div>
      )
  }
}

export default EVENT_HANDLER;