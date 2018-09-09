import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitForElement } from "react-testing-library";
import Calculator from "./Calculator";

test("Calculator renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calculator />, div);
});

test("Calculations", () => {
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
