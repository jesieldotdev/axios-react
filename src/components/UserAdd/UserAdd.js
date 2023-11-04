import React, { Component } from "react";
import axios from "axios";

class UserAdd extends Component {
  state = {
    username: ""
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.username == "") {
      alert("Please enter username");
      return;
    }

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, {
        name: this.state.username
      })
      .then(res => {
        // console.log(res.data);
        this.props.userAdded(res.data);
      });
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={this.handleUsernameChange}
          value={this.state.username}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default UserAdd;
