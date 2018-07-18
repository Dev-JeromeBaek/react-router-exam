import React from "react";
// import { SampleConsumer } from "../../contexts/Sample";
import { useSample } from "../../contexts/Sample";
/*
const Receives = () => {
  return (
    <SampleConsumer>
      {sample => <div>현재 설정된 값: {sample.state.value}</div>}
    </SampleConsumer>
  );
};
*/

const Receives = ({ value }) => {
  return <div>현재 설정된 값: {value}</div>;
};

// export default Receives;
export default useSample(Receives);
