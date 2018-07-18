import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Post from "./Post";

class Posts extends Component {
  render() {
    return (
      <div className="middle">
        <h1>포스트</h1>
        <NavLink exact to="/posts/react" className="item">
          React
        </NavLink>
        <NavLink to="/posts/redux" className="item">
          Redux
        </NavLink>
        <NavLink to="/posts/relay" className="item">
          Relay
        </NavLink>
        <Route path="/posts/:title" component={Post} />
      </div>
    );
  }
}

export default Posts;
