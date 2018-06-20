import React from "react";
import axios from 'axios'
const { Provider, Consumer } = React.createContext();

class UserProvider extends React.Component {
  login = async (username, password) => {
    try {
      const res = await axios.post("https://hurricane-pansy.glitch.me/users/login",
        {
          username: username,
          password: password
        }
      );
      localStorage.setItem('token', res.data.token)
      console.log('로그인됨')
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const value = {
      onLogin: this.login
    }
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
