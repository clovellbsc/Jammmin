import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import { SearchBar } from "../searchbar/searchbar";

class App extends React.Component {
  constructor(props) {}

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
export default App;
