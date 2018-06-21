import React from "react";
import { Redirect } from "react-router-dom";
export default class WriteButtonContainer extends React.Component {
  state = {
    redirect: false
  };
  setRedirect = e => {
    this.setState({
      redirect: true
    })
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/write-post" />;
    }
    return <button onClick={this.setRedirect}>글쓰기</button>;
  }
}
