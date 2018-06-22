import React from 'react';
import { UserConsumer } from '../contexts/UserContext';
import LoginForm from '../components/LoginForm';
import Title from '../components/Title';
import { Redirect } from 'react-router-dom';
export default class LoginContainer extends React.Component {
  state = {
    success: false,
  };
  render() {
    if (!this.state.success) {
      return (
        <UserConsumer>
          {({ onLogin }) => (
            <LoginForm
              onLogin={async (username, password) => {
                await onLogin(username, password);
                this.setState({
                  success: true,
                });
              }}
            />
          )}
        </UserConsumer>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
