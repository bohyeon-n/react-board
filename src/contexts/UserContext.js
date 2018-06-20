import React from "react";

const { Provider, Consumer } = React.cecreateContext();

class UserProvider extends React.Component {
  login = async (username, password) => {
    try {
      const res = await axios.get("https://hurricane-pansy.glitch.me/users/login",
        {
          username: username,
          password: password
        }
      );
      localStorage.setItem('token', res.data.token)
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const value = {
      login: this.login
    }
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
