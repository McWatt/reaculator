import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator
          operatorTheme='lightgrey'
          operationTheme='lightpink'
          equalsTheme="lightgreen" />
      </div>
    );
  }
}

export default App;
