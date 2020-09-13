import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "macarena", duration: "3:25" },
    { title: "All Star", duration: "6:05" },
    { title: "I want it that way ", duration: "2:54" },
    { title: "No Scrubs", duration: "4:05" },
    { title: "macarena", duration: "3:25" },
    { title: "All Star", duration: "6:05" },
    { title: "I want it that way ", duration: "2:54" },
  ];
};

const selectedSongReducer = (song = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }
  return song;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
