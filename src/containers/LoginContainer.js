import React from 'react'
import { UserConsumer } from '../contexts/UserContext';
import LoginForm from '../components/LoginForm'
export default class LoginContainer extends React.Component {
  render() {
    return (
      <UserConsumer>
      {({onLogin}) => (
        <LoginForm onLogin={onLogin}/>
      )}
      </UserConsumer>
    )
  }
}