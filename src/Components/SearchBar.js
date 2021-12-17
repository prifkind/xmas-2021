import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  changeHandler = (e) => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment">
          <form className="ui form">
            <label>Search Term</label>
            <input
              type="text"
              className="ui input focus"
              value={this.state.term}
              onChange={this.changeHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
