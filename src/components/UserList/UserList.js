import React, { Component } from "react";
import axios from "axios";
import UserAdd from "../UserAdd/UserAdd";

class UserList extends Component {
  state = {
    users: []
  };

  constructor(props) {
    super(props);
    this.handleUserAdded = this.handleUserAdded.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  handleUserAdded(userObject) {
    const newUsers = [...this.state.users];
    newUsers.push(userObject);

    this.setState({ users: newUsers });
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <ul>
          {this.state.users.map(user => {
            return (
              <li>
                {user.name} (ID: {user.id})
              </li>
            );
          })}
        </ul>
        <UserAdd userAdded={this.handleUserAdded} />
      </div>
    );
  }
}

export default UserList;
