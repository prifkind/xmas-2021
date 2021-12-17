import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {};

  render() {
    console.log(this.state.term);

    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
