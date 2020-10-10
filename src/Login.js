import React from 'react'
const { Component } = require("react")

class Login extends Component{
  constructor(){
    super()
    this.state = {
      email:'',
      name:'',
      error :''
    }
  }
  
  handleChange = (event)=>{
    let name = event.target.name
    this.setState({[name]:event.target.value})
  }
  handleSubmit = (event) =>{
    console.log(this.state)
    event.preventDefault();
    if(this.state.email === 'sam@turing.io' && String(this.state.password) ==='123456' )
    console.log('works')
  }

  
  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label for = "email">Email</label>
        <input type = 'text' value={this.state.email} name ='email' onChange={this.handleChange} ></input>
        <label for ="password">Password</label>
        <input type = "text" value={this.state.password} name ='password' onChange={this.handleChange} ></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }


}
export default Login