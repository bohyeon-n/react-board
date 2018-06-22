import React from 'react';
import boardAPI from '../boardAPI';
const { Provider, Consumer } = React.createContext();
class UserProvider extends React.Component {
  login = async (username, password) => {
    console.log(username, password);
    try {
      const res = await boardAPI.post('/users/login', {
        username: username,
        password: password,
      });
      localStorage.setItem('token', res.data.token);

      console.log('로그인됨');
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('아이디와 비밀번호를 확인해주세요');
      }
    }
  };

  render() {
    const value = {
      onLogin: this.login,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
