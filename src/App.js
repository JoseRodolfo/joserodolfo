import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Header from "./components/header.js"
import Content from "./components/content.js"

class App extends Component {
  render() {
    return (<HashRouter>
      <div className="App mx-auto container no-gutters ">
        <Header/>
        <Content />
      </div>
    </HashRouter>)
  }
}

export default App;
