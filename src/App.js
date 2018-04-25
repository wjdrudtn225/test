import React, { Component } from 'react';
import './App.css';
import {Header} from './component';
import './index.css';
import {PostContainers} from './containers';
import PostContainer from "./containers/PostContainers";

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <PostContainer/>
      </div>
    );
  }
}

export default App;
