import giphy from "../api/giphy";
import React from "react";
import SearchBar from "./SearchBar";
import GifDetail from "./GifDetail";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import GifSelect from "./GifSelect";

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
      selectedGif: res.data.data[0],
    });
    // console.log(this.state.gifs);
  };

  onClickNext = () => {
    console.log(this.state.gifs.indexOf(this.state.selectedGif));
    let i = this.state.gifs.indexOf(this.state.selectedGif);
    if (i < this.state.gifs.length - 1) {
      i = i + 1;
      this.setState({ selectedGif: this.state.gifs[i] });
    }
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <div>
          <GifSelect />
        </div>
        <div>
          <GifDetail
            gifs={this.state.gifs}
            selectedGif={this.state.selectedGif}
          />
        </div>
        <div>
          <BackButton />
        </div>
        <div>
          <NextButton onClickNext={this.onClickNext} />
        </div>
      </div>
    );
  }
}

export default App;
//
