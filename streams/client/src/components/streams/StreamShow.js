import React, { Component } from "react";
import { fetchStream } from "../../actions";
import flv from "flv.js"; // downloading stream and converting it to a playable format
import { connect } from "react-redux";
class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    console.log(id);
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();
  };

  componentWillUnmount = () => {
    this.player.destroy();
  };
  render() {
    if (!this.props.stream) {
      return (
        <div>
          <video ref={this.videoRef} style={{ width: "100%" }} controls />
          <div>Loading... </div>
        </div>
      );
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
