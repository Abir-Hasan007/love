// import React { useState }from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 function FUNCTON_USESATE() {
    const [count, setCount] = useState(0);
    
    const handleClick = ()=>{
        setCount(count+1);
    }
    const handleClicks = ()=>{
        setCount(count-1);
    }
  return (
   
    <Card style={{ width: '18rem' ,textAlign : "center"}} className="m-3">
        <Card.Header style={{ height: '10rem' ,textAlign : "center",fontSize : "50px"}}>
            Function Count : {count}
            </Card.Header>
        <Card.Body>
          <Button variant="success" size="lg" className='m-3' onClick={handleClick} disabled={count===5 ? true : false}>+</Button>
          <Button variant="danger" size="lg" onClick={handleClicks} disabled={count===0 ? true : false}>-</Button>
        </Card.Body>
      </Card>
  )
}

export default FUNCTON_USESATE;