import React, { Component } from "react";

class Search extends Component {
  render() {
    const location = this.props.location;
    return (
      <div>
        {new URLSearchParams(location.search).get("keyword")} Search
        <div />
      </div>
    );
  }
}

export default Search;
