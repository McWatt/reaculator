import React, { Component } from "react";
import operations from './operatorFunctions';
import Button from './components/Button';
import Screen from './components/Screen';
import CalculatorContainer from './components/CalculatorContainer';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
      previousValue: 0,
      newConstant: true,
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
      operator: event.target.getAttribute("operator"),
      newConstant: true,
    });
  }

    handleCalculationRequest(event) {
    this.setState({
      currentValue: this.calculateNumbers(),
      operator: '',
      newConstant: true,
    });
  }

  calculateNumbers() {
      return operations[this.state.operator](this.state.previousValue, this.state.currentValue);
  }

  appendNumberToCurrentValue(num) {
    this.setState({
      currentValue: Number(this.state.currentValue + '' + num),
      newConstant: false,
    })
  }

  handleNumberSetting(event) {
      const num = Number(event.target.innerText);

      if (this.state.newConstant) {
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
          newConstant: true,
      });
  }

  render() {
    return (
      <CalculatorContainer>
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
              disabled={this.state.newConstant}
              backgroundColor={this.props.operationTheme}
              onClick={this.handleCalculationRequest}>=</Button>
            <Button
              operator='-'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '-'}
              onClick={this.handleOperatorChange}>-</Button>
      </CalculatorContainer>
    );
  }
}

export default Calculator;
