import giphy from "../api/giphy";
import React from "react";
import SearchBar from "./SearchBar";
import GifDetail from "./GifDetail";

class App extends React.Component {
  state = { term: "", gifs: [], selectedGif: null };


  onTermSubmit = async (term) => {
    const res = await giphy.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      gifs: res.data.data,
      selectedGif: res.data.data[0].images.original,
    });
    console.log(this.state.gifs);
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <div>
          <GifDetail gifs={this.state.gifs} selectedGif={this.state.selectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
//
