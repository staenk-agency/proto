import React, { Component } from 'react'
import './App.css'
import Router from './Components/Router'

import Dashboard from './Components/dashboard/Dashboard';
import HorizontalNavbar from './Components/layout/HorizontalNavBar';
import VerticalMenu from './Components/layout/VerticalMenu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
