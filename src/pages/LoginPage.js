import React from "react";
import LoginFormContainer from "../containers/LoginFormContainer";
import { UserProvider } from "../contexts/UserContext";
import Title from '../components/Title'
export default class LoginPage extends React.Component {
  render() {
    return (
      <UserProvider>
        <Title title='로그인 페이지'/>
        <LoginFormContainer />
      </UserProvider>
    );
  }
}
