import React, { Component } from "react";
import { connect } from "react-redux";
import "lodash";
class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="Header">
        <h2>{user.name}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state, ownPorps) => {
  return { user: state.users.find((user) => user.id === ownPorps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
