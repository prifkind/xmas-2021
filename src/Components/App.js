import giphy from "../api/giphy";
import React from "react";
import SearchBar from "./SearchBar";
import GifDetail from "./GifDetail";

class App extends React.Component {
  state = { term: "", gifs: [] };

  componentDidMount() {
    this.onTermSubmit("Yule log");
  }

  onTermSubmit = async (term) => {
    const res = await giphy.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      gifs: res.data.data,
    });
  };

  render() {
    console.log(this.state.gifs)
    return (
      <div>
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <div>
          <GifDetail gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
//
