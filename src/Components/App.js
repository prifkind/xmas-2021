import giphy from "../api/giphy";
import React from "react";
import GifDetail from "./GifDetail";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import GifSelect from "./GifSelect";

class App extends React.Component {
  state = { term: "Christmas", gifs: [], selectedGif: "" };

  componentDidMount() {
    this.onThemeChange("Christmas");
  }

  onThemeChange = async (term) => {
    const res = await giphy.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      gifs: res.data.data,
      selectedGif: res.data.data[0],
    });
  };

  onClickNext = () => {
    let i = this.state.gifs.indexOf(this.state.selectedGif);
    if (i < this.state.gifs.length - 1) {
      i = i + 1;
      this.setState({ selectedGif: this.state.gifs[i] });
    }
  };

  onClickBack = () => {
    // console.log(this.state.gifs.indexOf(this.state.selectedGif));
    let i = this.state.gifs.indexOf(this.state.selectedGif);
    if (i > 0) {
      i = i - 1;
      this.setState({ selectedGif: this.state.gifs[i] });
    } else if (i === 0) return;
  };

  render() {
    return (
      <div>
        <div>
          <GifSelect onThemeChange={this.onThemeChange} />
        </div>
        <div>
          <GifDetail
            gifs={this.state.gifs}
            selectedGif={this.state.selectedGif}
          />
        </div>
        <div>
          <BackButton onClickBack={this.onClickBack} />
        </div>
        <div>
          <NextButton onClickNext={this.onClickNext} />
        </div>
      </div>
    );
  }
}

export default App;

