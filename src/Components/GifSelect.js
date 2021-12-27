import React from "react";

class GifSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <select
          className="ui dropdown"
          onChange={(e) => {
            // this.setState({ term: e.target.value });
            this.props.onThemeChange(e.target.value);
          }}
        >
          <option selected value="0">
            Select a theme
          </option>
          <option value="Yule Log">Yule Log</option>
          <option value="Santa">Santa</option>
          <option value="Elves">Elves</option>
          <option value="Christmas Movies">Christmas Movies</option>
        </select>
      </div>
    );
  }
}

export default GifSelect;
