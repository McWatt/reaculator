import operations from './operatorFunctions';

test('two plus two is four', () =>{
    expect(operations['+'](2, 2)).toBe(4);
});

test('four minus two is two', () =>{
    expect(operations['-'](4, 2)).toBe(2);
});

test('four times two is eight', () =>{
    expect(operations['*'](4, 2)).toBe(8);
});

test('eight divided by two is four', () =>{
    expect(operations['/'](8, 2)).toBe(4);
});