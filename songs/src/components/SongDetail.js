import React from "react";
import { connect } from "react-redux";

function SongDetail(props) {
  if (props.song) {
    return (
      <div className="details">
        <h3>Details for</h3>
        <p>Title :{props.song.title}</p>
        <p>Duration :{props.song.duration}</p>
      </div>
    );
  } else {
    console.log(props.song);
    return (
      <div className="details">
        <p>Select a song to view its details !</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
