import React, { Component } from 'react';
import './App.css';

import { ButtonWidget } from './Components/button-component/button.component.jsx';
// import { WidgetAlign } from './Enums/alignment';

class App extends Component {

  Submit = () => {
    console.log('Submitted')
  };

  render() {
    return (
      <div className="App">
        <ButtonWidget
          text="Login"
          callback={this.Submit}
        />
      </div>
    );
  }
}

export default App;