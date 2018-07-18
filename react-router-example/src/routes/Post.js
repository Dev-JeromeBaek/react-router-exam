import React, { Component } from "react";

class Post extends Component {
  render() {
    return <div>{this.props.match.params.title}</div>;
  }
}

export default Post;
