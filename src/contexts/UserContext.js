import React from "react";
import todoAPI from '../todoAPI'
import axios from 'axios'
const { Provider, Consumer } = React.createContext();
class UserProvider extends React.Component {
  login = async (username, password) => {
    try {
      const res = await todoAPI.post("/users/login",
        {
          username: username,
          password: password
        }
      );
      localStorage.setItem('token', res.data.token)
      
      console.log('로그인됨')
    } catch (e) {
      console.log(e.status)
      alert('아이디와 비밀번호를 확인해주세요');
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
