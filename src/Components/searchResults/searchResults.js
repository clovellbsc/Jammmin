import React from "react";
import "./searchResults.css";
import { TrackList } from "../trackList/trackList";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    );
  }
}
