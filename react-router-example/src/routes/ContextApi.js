import React, { Component, createElement } from "react";
import LeftPane from "../components/contextapi/LeftPane";
import RightPane from "../components/contextapi/RightPane";

import { SampleProvider } from "../contexts/Sample";
import { Another as AnotherProvider } from "../contexts/Another";

import Counter from "../components/contextapi/Counter";

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) => createElement(context, { children: prev }),
    children
  );

class ContextApi extends Component {
  render() {
    return (
      /*
      <SampleProvider>
      <div className="panes">
      <LeftPane />
      <RightPane />
      </div>
      </SampleProvider>
      */
      <AppProvider contexts={[SampleProvider, AnotherProvider]}>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
        <Counter />
      </AppProvider>
    );
  }
}

export default ContextApi;
