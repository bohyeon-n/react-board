import React from 'react'

export default class LoginForm extends React.Component{
  state = {
    username: null,
    password: null
  }
  inputUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  inputPassword = (e) => {
    this.setState({
      password: e.target.value 
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.inputUsername}/>
        <input type="password" value={this.state.value} onChange={this.inputPassword}/>
        <button >로그인</button>
      </div>
    )
  }
}