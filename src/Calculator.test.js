import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitForElement } from "react-testing-library";
import Calculator from "./Calculator";

test("Calculator renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calculator />, div);
});

test("Whole number calculations work as expected", () => {
    const { container } = render(
        <Calculator
            operatorTheme='lightgrey'
            operationTheme='lightpink' />
    );
    const calculator = container.querySelector('[role="grid"]');
    const screen = calculator.querySelector('[data-type="screen"]');
    const button3 = calculator.querySelector('button[value="3"]');
    const button7 = calculator.querySelector('button[value="7"]');
    const addition = calculator.querySelector('button[value="+"]');
    const times = calculator.querySelector('button[value="*"]');
    const division = calculator.querySelector('button[value="/"]');
    const subtraction = calculator.querySelector('button[value="-"]');
    const equals = calculator.querySelector('button[value="="]');
    const clear = calculator.querySelector('button[value="clear"]');

    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('37');

    // test second part of equation 
    fireEvent.click(addition);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('74');
    
    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');



    // test subraction and test after initial clear
    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('37');

    // test second part of equation 
    fireEvent.click(subtraction);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('0');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');



    // test multiplication
    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('37');

    // test second part of equation 
    fireEvent.click(times);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('1369');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');



    // test division
    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('37');

    // test second part of equation 
    fireEvent.click(division);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('1');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');

});

test("Decimal number calculations work as expected", () => {
    const { container } = render(
        <Calculator
            operatorTheme='lightgrey'
            operationTheme='lightpink' />
    );
    const calculator = container.querySelector('[role="grid"]');
    const screen = calculator.querySelector('[data-type="screen"]');
    const button3 = calculator.querySelector('button[value="3"]');
    const button7 = calculator.querySelector('button[value="7"]');
    const addition = calculator.querySelector('button[value="+"]');
    const times = calculator.querySelector('button[value="*"]');
    const division = calculator.querySelector('button[value="/"]');
    const subtraction = calculator.querySelector('button[value="-"]');
    const equals = calculator.querySelector('button[value="="]');
    const clear = calculator.querySelector('button[value="clear"]');
    const decimal = calculator.querySelector('button[value="."]');

    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('3.');

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('3.7');

    // test second part of equation 
    fireEvent.click(addition);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('40.7');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');



    // test subraction and test after initial clear
    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual("3.");

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("3.7");

    // test second part of equation 
    fireEvent.click(subtraction);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('-33.3');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');



    // test multiplication
    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual("3.");

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("3.7");

    // test second part of equation 
    fireEvent.click(times);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('136.9');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');



    // test division
    // test one number entered
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('3');

    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual("3.");

    // test multiple numbers entered
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("3.7");

    // test second part of equation 
    fireEvent.click(division);
    fireEvent.click(button3);
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("37");

    // test addition
    fireEvent.click(equals);
    expect(screen.innerHTML).toEqual('0.1');

    // test clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');

});


test("Decimal numbers have proper formatting", () => {
    const { container } = render(
        <Calculator
            operatorTheme='lightgrey'
            operationTheme='lightpink' />
    );
    const calculator = container.querySelector('[role="grid"]');
    const screen = calculator.querySelector('[data-type="screen"]');
    const button0 = calculator.querySelector('button[value="0"]');
    const button3 = calculator.querySelector('button[value="3"]');
    const button7 = calculator.querySelector('button[value="7"]');
    const addition = calculator.querySelector('button[value="+"]');
    const clear = calculator.querySelector('button[value="clear"]');
    const decimal = calculator.querySelector('button[value="."]');

    // decimal only
    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('.');
    
    // no multiple decimals
    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('.');
    
    // followed by a zero
    fireEvent.click(button0);
    expect(screen.innerHTML).toEqual('.0');
    
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('.03');
    
    // followed by another zero
    fireEvent.click(button0);
    expect(screen.innerHTML).toEqual('.030');
    
    // another 3
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('.0303');
    
    // clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');
    
    fireEvent.click(button3);
    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('3.');
    
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('3.7');
    
    // followed by a zero
    fireEvent.click(button0);
    expect(screen.innerHTML).toEqual('3.70');
    
    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("3.707");


    // test second part of equation
    fireEvent.click(addition);
    expect(screen.innerHTML).toEqual('3.707');


    // decimal only
    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('.');

    // no multiple decimals
    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('.');

    // followed by a zero
    fireEvent.click(button0);
    expect(screen.innerHTML).toEqual('.0');

    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('.03');

    // followed by another zero
    fireEvent.click(button0);
    expect(screen.innerHTML).toEqual('.030');

    // another 3
    fireEvent.click(button3);
    expect(screen.innerHTML).toEqual('.0303');

    // clear
    fireEvent.click(clear);
    expect(screen.innerHTML).toEqual('0');

    fireEvent.click(button3);
    fireEvent.click(decimal);
    expect(screen.innerHTML).toEqual('3.');

    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual('3.7');

    // followed by a zero
    fireEvent.click(button0);
    expect(screen.innerHTML).toEqual('3.70');

    fireEvent.click(button7);
    expect(screen.innerHTML).toEqual("3.707");
});

test("Equals button should be disabled if not usable", () => {
    const { container } = render(
        <Calculator
            operatorTheme='lightgrey'
            operationTheme='lightpink' />
    );

    const calculator = container.querySelector('[role="grid"]');
    const equals = calculator.querySelector('button[value="="]');
    const button3 = calculator.querySelector('button[value="3"]');
    const addition = calculator.querySelector('button[value="+"]');

    expect(equals.disabled).toEqual(true);

    fireEvent.click(button3);
    expect(equals.disabled).toEqual(true);
    
    fireEvent.click(addition);
    expect(equals.disabled).toEqual(true);

    fireEvent.click(button3);
    expect(equals.disabled).toEqual(false);
});