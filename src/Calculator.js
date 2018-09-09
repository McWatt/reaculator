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

    this.setOperator = this.setOperator.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.performCalculation = this.performCalculation.bind(this);
    this.handleCalculationRequest = this.handleCalculationRequest.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.isCalcuable = this.isCalcuable.bind(this);
    this.appendNumberToCurrentValue = this.appendNumberToCurrentValue.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  setNumber(num) {
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

  setOperator(operator) {
    this.setState({
      operator: operator,
      newConstant: true,
    });
  }

  performCalculation() {
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

  handleOperatorChange(event) {
    this.setOperator(event.target.getAttribute("operator"));
  }

  handleCalculationRequest(event) {
    this.performCalculation();
  }

  handleNumberChange(event) {
    this.setNumber(Number(event.target.innerText));
  }

  handleClear(event) {
      this.setState({
          currentValue: 0,
          operator: '',
          previousValue: 0,
          newConstant: true,
      });
  }

  isOperator(key) {
    return ['*', '+', '-', '/'].some(operator => operator === key);
  }

  isCalcuable() {
    return this.isOperator(this.state.operator);
  }

  handleKeypress(event){
    if (!isNaN(event.key)) {
      this.setNumber(event.key);
      return;
    }

    if (this.isOperator(event.key)) {
      this.setOperator(event.key);
      return;
    }

    if (event.key === 'Enter' && this.isCalcuable()) {
      this.performCalculation();
    }

    if (event.key === 'Escape') {
      this.handleClear();
  }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeypress, false);
  }

  render() {
    return (
      <CalculatorContainer>
            <Screen>{this.state.currentValue}</Screen>
            <Button onClick={this.handleNumberChange}>7</Button>
            <Button onClick={this.handleNumberChange}>8</Button>
            <Button onClick={this.handleNumberChange}>9</Button>
            <Button
              operator='/'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '/'}
              onClick={this.handleOperatorChange}>/</Button>
            <Button onClick={this.handleNumberChange}>4</Button>
            <Button onClick={this.handleNumberChange}>5</Button>
            <Button onClick={this.handleNumberChange}>6</Button>
            <Button
              operator='*'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '*'}
              onClick={this.handleOperatorChange}>*</Button>
            <Button onClick={this.handleNumberChange}>1</Button>
            <Button onClick={this.handleNumberChange}>2</Button>
            <Button onClick={this.handleNumberChange}>3</Button>
            <Button
              operator='+'
              backgroundColor={this.props.operatorTheme}
              chosen={this.state.operator === '+'}
              onClick={this.handleOperatorChange}>+</Button>
            <Button onClick={this.handleNumberChange}>0</Button>
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
