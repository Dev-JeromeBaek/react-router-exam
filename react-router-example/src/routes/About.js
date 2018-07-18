import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div>{this.props.match.params.username}</div>
      </div>
    );
  }
}

export default About;
