import React, { Component } from "react";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { editStream } from "../../actions/index";
class StreamEdit extends Component {
  onSubmit = (formValues) => {
    let id = this.props.match.params.id;
    console.log(this.props);
    this.props.editStream(id, formValues);
  };
  render() {
    return (
      <div>
        <h3>Edit your stream </h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  console.log(state.streams[id]);
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { editStream })(StreamEdit); //warpping with redux
