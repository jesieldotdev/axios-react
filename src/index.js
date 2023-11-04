import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import UserList from "./components/UserList/UserList";

class App extends Component {
  render() {
    return <UserList />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
