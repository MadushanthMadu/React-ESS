import React, { Component } from 'react';
import './App.css';

import Login from './pages/authentication/login.page';
import { SideNavigation } from './components/sidenavigation-component/sidenavigation.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNavigation />
        <Login />
      </div>      
    );
  }
}

export default App;