import React, { Component } from "react";

import LifeCycles2 from "./LifeCycles2";

class LifeCycles extends Component {
  state = {
    value: 0,
    counter: 1,
    error: false
  };

  componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    /*
    * 이 API는 컴포넌트가 화면에 나타나게 됐을 떄 호출됨.
    * 여기선 주로 D3, masonry 처럼 DOM 을 사용해야 하는 외부 라이브러리를 연동하거나,
    * 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여
    * ajax 요청을 하거나, DOM 의 속성을 읽거나 직접 변경하는 작업을 진행함.
    */

    console.log("componentDidMount");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    // nextProps: 다음으로 받아 올 props 값,
    // prevState: 현재 없데이트 되기 전의 상태
    /*
      if (nextProps.value !== prevState.value) {
        return { value: nextProps.value };
      }
      return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
    /*
    * 이 API는 props 로 받아온 값을 state 로 동기화 하는 작업을 해줘야 하는 경우 사용.
    */
    // 사용은 LifeCycles2 를 참고!
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
    // if (nextProps.value === 10) return false;
    return true;
    // 사용은 LifeCycles2 를 참고!
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM 업데이트가 일어나기 직전의 시점.
    // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보려함.
    // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데,
    // 이미 구현이 되어있다면 처리하지 않도록 하기 위함.
    /*
    * 이 API 가 발생하는 시점은
    * 1. render()
    * 2. getSnapshotBeforeUpdate()
    * 3. 실제 DOM 에 변화 발생
    * componentDidUpdate
    * 즉, DOM 변화가 일어나기 직전의 DOM 상태를 가져오고,
    * 여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라미터로 받아올 수 있게 됨.
    */
    /*
    if (prevState.array !== this.state.array) {
      const { scrollTop, scrollHeight } = this.list;

      // 여기서 반환 하는 값은 componentDidMount 에서 snapshot 값으로 받아올 수 있음.
      return {
        scrollTop,
        scrollHeight
      };
    }
    */
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
    * 이 API 는 컴포넌트에서 render() 를 호출하고 난 다음 발생.
    * 해당 시점에선 this.props 와 this.state 가 바뀌어있고, 파라미터를 통해 이전의 값인
    * prevProps 와 prevState 를 조회할 수 있음.
    * 그리고, getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옴.
    */
    /*
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현되어있다면 처리하지 않습니다.
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
    */
    // 사용은 LifeCycles2 를 참고!
  }

  componentWillUnmount() {
    // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
    /*
    * 등록했었던 이벤트를 제거하고, 만약 setTimeout 을 걸어놓아ㅣㅆ다면 clearTimeout 을 통하여 제거 해야함.
    * 추가적으로, 외부 라이브러리를 사용한게 있고, 해당 라이브러리에 dispose 기능이 있다면 여기서 호출해 주면 됨.
    */

    // 삭제되는 시점은 아래 <LifeCycles2/> 를 참고!
    console.log("Good Bye");
  }

  componentDidCatch(error, info) {
    // render 함수에서 에러가 발생한다면, 리액트 앱이 크래쉬 되어버리는데 그러한 상황에 유용하게 사용할 수 있는 API
    // 에러인 상황 가정
    // 사용은 LifeCycles2에서 에러 발생 시킴!

    // 해당 API 는 에러가 나는 Component의 부모 Component에서 설정을 해주어야 함.
    console.log(error);
    console.log(info);
    this.setState({
      error: true
    });
    // API 를 통해 서버로 오류 내용 날리기.
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    // console.log(this.props);
    //console.log(this.props.location);
    //console.log(this.props.location.search);
    //console.log(new URLSearchParams(this.props.location.search).get('value'));
    if (this.state.error) {
      return <div>에러!</div>;
    }
    return (
      <div>
        <p>
          props:
          {new URLSearchParams(this.props.location.search).get("value") !== null
            ? new URLSearchParams(this.props.location.search).get("value")
            : 0}
        </p>
        <p>state: {this.state.value}</p>
        {this.state.counter < 10 && <LifeCycles2 value={this.state.counter} />}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default LifeCycles;
