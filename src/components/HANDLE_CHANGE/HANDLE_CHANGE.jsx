import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Form } from 'react-bootstrap';

export default function HANDLE_CHANGE() {
    // const [name, setname] = useState('')
    // const [email, setemail] = useState('')
    // const [password, setpassword] = useState('')
    const [user,setUser] = useState({name: '',email: '',password:''});
    // const {name,email,password} = user;
    // const [validInput,setvaliInput] = useState(true);
    
    //     useEffect(()=>{
    //         if(name.length < 2){
    //             setvaliInput (false)
    //         }
    //         else{
    //             setvaliInput (true)
    //         }
    //     },[name]);

    //     const  handleOnchnage=(e)=>{
    //         setname(e.target.value);
    //         // console.log(name);
       
    // }

    // const handleOnname = (e) =>{
    //   // setname(e.target.value);
    //   // console.log(name);

    //   // setUser({name: e.target.value,email,password});
    //   setUser({name: e.target.value,email,password});
    // }
    // const handleOnemail = (e) =>{
    //   // setemail(e.target.value);
    //   // console.log(email);
    //   setUser({name,email: e.target.value,password});
    // }
    // const handleOnpassword = (e) =>{
    //   // setpassword(e.target.value);
    //   // console.log(password);
    //   setUser({name,email,password: e.target.value});
    // }
    
    const handleOnchnage = (e)=>{
      const filedName = e.target.name;
      setUser({...user,[e.target.name]:e.target.value})
      // if(filedName === "name"){
      //   setUser({name: e.target.value,email,password});
      // } 

      // else if(filedName === "email"){
      //   setUser({name,email: e.target.value,password});
      // }

      // else if(filedName === "password"){
      //   setUser({name,email,password: e.target.value});
      // }

    }
    const handleSubmit = (e) =>{
      
      // let userInfo = {name,email,password}
      console.log(user);
      e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
      
    <div>
      <h1>HANDLE_CHANGE</h1>
      Name :<input type="text" 
      name = "name"
      onChange={handleOnchnage}
      // value = {name}
      // style={{background : validInput ? 'green' : 'red'}}
      />
      E-mail :<input type="text" 
      name = "email"
      onChange={handleOnchnage}
      // value = {name}
      // style={{background : validInput ? 'green' : 'red'}}
      />
      Password :<input type="text" 
      name = "password"
      onChange={handleOnchnage}
      // value = {name}
      // style={{background : validInput ? 'green' : 'red'}}
      />
      <button >Register</button>
    </div>
      </form>
  )
}
