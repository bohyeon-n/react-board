import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>

        <Route path='/login' component={LoginPage}/>
        <Route path='/' component={PostPage}/>

      </React.Fragment>
      </BrowserRouter>      
    );
  }
}

export default App;
