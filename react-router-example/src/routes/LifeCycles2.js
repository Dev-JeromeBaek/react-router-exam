import React, { Component } from 'react';

class LifeCycles2 extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // nextProps: 다음으로 받아 올 props 값,
    // prevState: 현재 없데이트 되기 전의 상태
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    // 변경할 사항이 없을 시 return null; 해주면 됨.
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return false 하면 업데이트를 안함.
    // return this.props.checked !== nextProps.checked

    /*
    * 이 API 는 컴포넌트를 최적화하는 작업에서 매우 유용하게 사용됨.
    * 쓸데없이 낭비되고 있는 CPU 처리량을 줄여주기 위해 
    * Virtual DOM 에 리렌더링 하는것 까지도 불필요한 경우를 방지하기 위해
    * shouldComponentUpdate를 장석함.
    * 
    * 이 함수는 기본적으로 true를 반환하고
    * 따로 작성을 해주어 조건에 따라 false를 반환하면 해당 조건에는
    * render() 함수를 호출하지 않음.
    */
    console.log(nextProps);
    console.log(nextState);
    if (nextProps.value === 1) return true;
    if (nextProps.value === 2) return true;
    if (nextProps.value === 5) return true;
    if (nextProps.value === 7) return true;
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value값이 바뀌었다!', this.props.value);
    }
  }

  render() {
    return (
      <div>
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default LifeCycles2;
