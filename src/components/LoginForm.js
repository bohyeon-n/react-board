import React from 'react'

export default class LoginForm extends React.Component{
  
  state = {
    username: '',
    password: ''
  }
  handleInputUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handleInputPassword = (e) => {
    this.setState({
      password: e.target.value 
    })
  }
  render() {
    const {onLogin} = this.props
    const {username, password} = this.state
  
    return (
      <div>
        <h1>로그인</h1>
        <input type="text" value={username} onChange={this.handleInputUsername} />
        <input type="password" value={password} onChange={this.handleInputPassword}/>
        <button onClick={e => onLogin(username, password)}>로그인</button>
      </div>
    )
  }
}