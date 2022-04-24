import React from "react";
import "./playlist.css";
import { TrackList } from "../trackList/trackList";

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
