import giphy from "../api/giphy";
import React from "react";
import SearchBar from "./SearchBar";
import GifItem from "./GifItem";

class App extends React.Component {
  state = { term: "" };

  onTermSubmit = async (term) => {
    const res = await giphy.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      gifs: res,
    });
  };

  render() {
    console.log(this.state.term);

    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <GifItem />
      </div>
    );
  }
}

export default App;
