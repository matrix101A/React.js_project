import React, { Component } from "react";
import { signOut, signIn } from "../actions";
import { connect } from "react-redux";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "682844650093-e7gs60aiakkoinqql4shqkt2ncdv4h2h.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) return null;

    if (this.props.isSignedIn)
      return (
        <div>
          <button
            className="ui red google button"
            onClick={this.onSignOutClick}
          >
            <i className="google icon" />
            Sign Out !{" "}
          </button>
        </div>
      );
    return (
      <div>
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with google !{" "}
        </button>
      </div>
    );
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
