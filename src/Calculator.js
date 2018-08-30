import React, { Component } from "react";
import styled, { css } from 'styled-components';

const Container = styled.div`
  font-size: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Screen = styled.div`
  background-color: darkslategrey;
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
  border: 1px solid white;

  &:active {
    background-color: darkgrey;
    color: white;
  }

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props =>
    props.chosen &&
    css`
      background-color: lightskyblue;
    `};

  ${props =>
    props.disabled &&
    css`
      color: lightgrey;
      font-style: italic;
    `};
`;

const operations = {
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
      previousValue: 0,
      operator: '',
    };

    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleCalculationRequest = this.handleCalculationRequest.bind(this);
    this.handleNumberSetting = this.handleNumberSetting.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.appendNumberToCurrentValue = this.appendNumberToCurrentValue.bind(this);
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
      return operations[this.state.operator](this.state.previousValue, this.state.currentValue);
  }

  appendNumberToCurrentValue(num) {
    this.setState({
      currentValue: Number(this.state.currentValue + '' + num),
    })
  }

  handleNumberSetting(event) {
      const num = Number(event.target.innerText);

      if (this.state.operator !== '') {
          this.setState({
              previousValue: this.state.currentValue,
              currentValue: '',
            },
            () => {
              this.appendNumberToCurrentValue(num);
            }
          );
      } else {
          this.appendNumberToCurrentValue(num);
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
            <Button
              operator='/'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '/'}
              onClick={this.handleOperatorChange}>/</Button>
            <Button onClick={this.handleNumberSetting}>4</Button>
            <Button onClick={this.handleNumberSetting}>5</Button>
            <Button onClick={this.handleNumberSetting}>6</Button>
            <Button
              operator='*'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '*'}
              onClick={this.handleOperatorChange}>*</Button>
            <Button onClick={this.handleNumberSetting}>1</Button>
            <Button onClick={this.handleNumberSetting}>2</Button>
            <Button onClick={this.handleNumberSetting}>3</Button>
            <Button
              operator='+'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '+'}
              onClick={this.handleOperatorChange}>+</Button>
            <Button onClick={this.handleNumberSetting}>0</Button>
            <Button
              backgroundColor={this.props.operationTheme}
              onClick={this.handleClear}>clear</Button>
            <Button
              backgroundColor={this.props.operationTheme}
              onClick={this.handleCalculationRequest}>=</Button>
            <Button
              operator='-'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '-'}
              onClick={this.handleOperatorChange}>-</Button>
      </Container>
    );
  }
}

export default Calculator;