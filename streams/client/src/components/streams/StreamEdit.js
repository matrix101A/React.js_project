import { connect } from "react-redux";
import { fetchStream } from "../../actions";

import React, { Component } from "react";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (this.props.stream) {
      return <div>{this.props.stream.title}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);
