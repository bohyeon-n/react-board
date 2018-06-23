import React from 'react';
import boardAPI from '../boardAPI';
const { Provider, Consumer } = React.createContext();
class UserProvider extends React.Component {
  state = {
    loading: false,
    id: null,
    username: null,
  };

  fetchMe = async () => {
    this.setState({
      loading: true,
    });
    try {
      const res = await boardAPI.get('/me');
      this.setState({
        id: res.data.id,
        username: res.data.username,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  login = async (username, password) => {
    this.setState({
      loading: true,
    });
    try {
      const res = await boardAPI.post('/users/login', {
        username: username,
        password: password,
      });
      localStorage.setItem('token', res.data.token);
      await this.fetchMe();
      console.log('로그인됨');
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  logout = () => {
    localStorage.removeItem('token');
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout,
      username: this.username,
      password: this.password,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
