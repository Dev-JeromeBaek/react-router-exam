import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class MyPage extends Component {
  render() {
    const logged = false;

    return (
      <div>
        <div>{!logged && <Redirect to="/login" />}</div>
      </div>
    );
  }
}

export default MyPage;
