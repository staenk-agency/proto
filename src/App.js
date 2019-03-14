import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import HorizontalNavbar from './Components/layout/HorizontalNavBar';
import VerticalMenu from './Components/layout/VerticalMenu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="horizontalNavBar-app-container">
          <HorizontalNavbar />        
        </div>
        <div className="verticalMenu-app-container">
          <VerticalMenu />        
        </div>
        <div className="dahsboard-app-container">
          <Dashboard />        
        </div>
      </div>
    );
  }
}

export default App;
