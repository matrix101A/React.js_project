import Modal from "../Modal";
import { deleteStream, fetchStream } from "../../actions/index";
import history from "../../history";
import { connect } from "react-redux";

import React, { Component } from "react";

class StreamDelete extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  delete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <div>
        <button className="ui primary button" onClick={this.delete}>
          Delete
        </button>
        <button
          className="ui  button"
          onClick={() => {
            history.push("/");
          }}
        >
          Cancel
        </button>
      </div>
    );
  };
  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream";
    }
    return `Are you sure you want to delete: ${this.props.stream.title} `;
  };
  render() {
    return (
      <Modal
        title="Delete Streams"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
