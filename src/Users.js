import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import axios from "axios";

class Users extends Component {
  getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.props.setUsers(response.data))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">
            Get Users
          </Button>
        </div>
        <div className="users-block">
          {this.props.users.map(user => {
            return (
              <div key={user.name}>
                name: {user.name}
                userName: {user.userName} Email: {user.email} URL:{" "}
                {user.website}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => dispatch({ type: "SET_USERS", value: users })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
