import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <button
          onClick={() => {
            this.props.history.push("/posts");
          }}
        >
          Post로 이동하기
        </button>
      </div>
    );
  }
}

export default Home;
