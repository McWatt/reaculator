import React from "react";
import ReactDOM from "react-dom";
import Button from './Button';

import { render } from 'react-testing-library'

it('Button renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
});

test('Button text is correctly rendered', () => {
    const { getByTestId } = render(<Button data-testid='button-test'>The button text</Button>);

    expect(getByTestId('button-test')).toHaveTextContent('The button text');
});