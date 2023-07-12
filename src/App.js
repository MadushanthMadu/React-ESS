import React, { Component } from 'react';
import './App.css';

import { ButtonWidget } from './Components/button-component/button.component.jsx';
// import { WidgetAlign } from './Enums/alignment';

import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes/theme';
import { Heading } from './Headings/heading';
import {InputField} from './Components/inputfield-component/inputfield-component';

class App extends Component {
  Submit = () => {
    console.log('Submitted')
  };

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Heading 
            type='h2'
            color='primary.main'
            title='Heading'
            description='sample description'
          />
          
          <ButtonWidget
            callback={this.Submit}
          />

          <InputField 
            Placeholder = "At least 8 characters"
          />
        </ThemeProvider>
      </div>      
    );
  }
}

export default App;