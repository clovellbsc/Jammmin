import React from "react";
import "./trackList.css";
import { Track } from "../track/track";

export class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TrackList">
        <p>Bat Out Of Hell - Meatloaf</p>
        <p>Rebel Yell - Billy Idol</p>
        <p>Highway To Hell - ACDC</p>
      </div>
    );
  }
}
