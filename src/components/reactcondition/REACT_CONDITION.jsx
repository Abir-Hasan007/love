import React, { Component } from 'react'
import HOMELOGIN from './HOMELOGIN';
import LOGIN from './LOGIN';

 class REACT_CONDITION extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin : true
      }
    }
    

  render() {
    const {isLogin} = this.state;
    return (
      <div>
        <h1>Hello R Condition..</h1>
        {/* [Turnary Operator] */}
        {isLogin ? <LOGIN/> : <HOMELOGIN/> } 
        
        {/* {isLogin && <LOGIN/> } [Short Circuit Operator] */}
      </div>
    )
  }
}

export default REACT_CONDITION;