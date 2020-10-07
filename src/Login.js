import React from 'react'
const { Component } = require("react")

class Login extends Component{
  constructor(){
    super()
    this.state = {
      response:[],
      error :''
    }
  }
  render() {
    return (
      <form>
        <label for = "email">Email</label>
        <input type = 'text' id ='email' name= "email"></input>
        <label for ="password">Password</label>
        <input type = "text" id="password" name="password"></input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }

}