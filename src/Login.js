import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component{
  constructor(){
    super()
    this.state = {
      email:'',
      name:'',
      error:''
    }
  }

  handleChange = (event)=>{
    let name = event.target.name
    this.setState({[name]:event.target.value})
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    if(this.state.email === 'sam@turing.io' && String(this.state.password) ==='123456' ){
      this.props.addUser(this.state)
      this.props.changeLogin()
    }
  }


  render() {
      if(this.props.isLoginPage) {
        return ( <Redirect to='/'/> )
      } else {
        return ( <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type='text' value={this.state.email} name ='email' onChange={this.handleChange} ></input>
          <label>Password</label>
          <input type='text' value={this.state.password} name ='password' onChange={this.handleChange} ></input>
          <input className='submit-login' type='submit' value='Submit'></input>
        </form>
      )
    }
  }


}
export default Login
