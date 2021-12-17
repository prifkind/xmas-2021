import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <label>Search Term</label>
            <input
              type="text"
              className="ui input focus"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
