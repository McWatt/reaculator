import React, { Component } from "react";
import styled from 'styled-components';

const Container = styled.div`
  padding: 8em;
  font-size: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  > button:nth-child(15) {
    grid-column: 2 / 4;
  }
`;

const Screen = styled.div`
  background-color: darkgrey;
  color: white;
  font-size: 1.25em;
  grid-column: 1 / -1;
  text-align: center;
`;

const Button = styled.button`
    background-color: lightblue;
    color: #777;
    font-size: 1em;
    outline: 0;
    border: 1px solid lightgrey;

    &:active {
      background-color: darkgrey;
      color: white;
    }


`;

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
      operator: '',
      previousValue: 0,
    };

    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleCalculationRequest = this.handleCalculationRequest.bind(this);
    this.handleNumberSetting = this.handleNumberSetting.bind(this);
    this.setCurrentNumber = this.setCurrentNumber.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleOperatorChange(event) {
      console.log(event.target.getAttribute("operator"));

    this.setState({
        operator: event.target.getAttribute("operator")
    });
  }

    handleCalculationRequest(event) {
    this.setState({
      currentValue: this.calculateNumbers(),
      operator: ""
    });
  }

  calculateNumbers() {
      return operators[this.state.operator](this.state.previousValue, this.state.currentValue);
  }

  setCurrentNumber(num) {
      this.setState({
        currentValue: !this.state.currentValue
          ? num
          : this.state.currentValue + num
      });
  }

    handleNumberSetting(event) {
        const num = event.target.innerText;

        if (this.state.operator !== '') {
            this.setState(
              {
                previousValue: this.state.currentValue,
                currentValue: ""
              },
              () => {
                this.setCurrentNumber(num);
              }
            );
        } else {
            this.setCurrentNumber(num);
        }
  }

  handleClear(event) {
      this.setState({
          currentValue: 0,
          operator: '',
          previousValue: 0,
      });
  }

  render() {
    return (
      <Container>
            <Screen>{this.state.currentValue}</Screen>
            <Button onClick={this.handleNumberSetting}>7</Button>
            <Button onClick={this.handleNumberSetting}>8</Button>
            <Button onClick={this.handleNumberSetting}>9</Button>
            <Button operator='/' onClick={this.handleOperatorChange}>/</Button>
            <Button onClick={this.handleNumberSetting}>4</Button>
            <Button onClick={this.handleNumberSetting}>5</Button>
            <Button onClick={this.handleNumberSetting}>6</Button>
            <Button operator='*' onClick={this.handleOperatorChange}>*</Button>
            <Button onClick={this.handleNumberSetting}>1</Button>
            <Button onClick={this.handleNumberSetting}>2</Button>
            <Button onClick={this.handleNumberSetting}>3</Button>
            <Button operator='+' onClick={this.handleOperatorChange}>+</Button>
            <Button danger onClick={this.handleClear}>clear</Button>
            <Button onClick={this.handleCalculationRequest}>=</Button>
            <Button operator='-' onClick={this.handleOperatorChange}>-</Button>
      </Container>
    );
  }
}

export default Calculator;