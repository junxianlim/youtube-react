import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="form-group search-bar">
        <input className="form-control" onChange={ e => this.onInputChange(e) } />
      </div>
    )
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
}

export default SearchBar;
