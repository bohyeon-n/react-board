import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
        <PostPage />
      </div>
    );
  }
}

export default App;
