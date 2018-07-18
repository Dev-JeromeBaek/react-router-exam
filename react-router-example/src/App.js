import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import Search from './routes/Search';
import NotFound from './routes/NotFound';
import ContextApi from './routes/ContextApi';
import LifeCycles from './routes/LifeCycles';

class App extends Component {
  render() {
    console.log(new URLSearchParams().get('value'));
    return (
      <Router>
        {/*Router 컴포넌트 안에 태그는 하나만 존재해야함.*/}
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/contextapi" component={ContextApi} />
            <Route
              path={
                new URLSearchParams().get('value') !== null
                  ? '/lifecycles/:value'
                  : '/lifecycles'
              }
              component={LifeCycles}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
