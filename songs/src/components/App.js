import React from "react";
import SongList from "./SongList";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import SongDetail from "./SongDetail";
import "./App.css";
const App = () => {
  return (
    <div style={{ margin: "30px" }} className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column songDetail eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
