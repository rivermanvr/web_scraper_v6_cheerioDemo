import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(ev) {
    const term = ev.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar marginB">
        <label>Enter a url: </label>
        <input
          className="tabRight marginR"
          value ={ this.state.term }
          onChange={ this.onInputChange } />
        <button className="btn btn-primary">Process</button>
        <hr />
      </div>
    );
  }
}