import React from "react";
import LoginContainer from "../containers/LoginContainer";
import { UserProvider } from "../contexts/UserContext";
export default class LoginPage extends React.Component {
  render() {
    return (
      <UserProvider>
        <LoginContainer />
      </UserProvider>
    );
  }
}
