import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import PostPage from './pages/PostPage'
import WritePostpage from './pages//WritePostPage'
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={PostListPage} />
          <Route path='/write-post' component={WritePostpage}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
